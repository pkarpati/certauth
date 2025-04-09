#!/usr/bin/env node

const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const { readFileSync } = require('node:fs');
const { marked } = require('marked');


const app = express();
const PORT = process.env.LISTEN_PORT || 2024;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ type: "application/x-www-form-urlencoded", extended: true }));
app.use(express.json());
app.set('json spaces', 2);


app.use((req, res, next) => {

  // Save request details for later log purposes
  res.log = {
    request: { url: req.url, protocol: `${req.protocol} ${req.httpVersion}`, headers: req.headers, params: req.params, query: req.query, body: req.body },
    pathSpecific: {}
  };
  next();
  
});


app.get('/', (req, res, err) => {

  // Show README.md
  console.log(res.log.request);
  res.status(200).send(marked.parse(
    '<style>' + readFileSync(__dirname + '/readme.css').toString() + '</style>' +
    readFileSync(__dirname + '/README.md').toString()
  ));

})


const adminRouter = require('./src/admin');
app.use('/client', adminRouter);

const clientRouter = require('./src/client');
app.use('/client', clientRouter);

app.all('*', (req, res, err) => {

  console.log(res.log.request);
  res.json({status: "404", message: "Not Found"});

})

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`) });


/* Check Root Certificate enddate and generate new if expired */
setInterval(
  () => {
    //console.log('Interval ended after ' + process.env.ROOT_CERT_CHECK_INTERVAL + 's');
  }, 
  process.env.ROOT_CERT_CHECK_INTERVAL * 1000
);


