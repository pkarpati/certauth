const clientRouter = require('express').Router();


clientRouter.get('/', (req, res, err) => {

  // Show all clients
  console.log(res.log.request);
  res.status(200).json({status: "200", message: `Requested path: ${req.url}`});

});


clientRouter.get('/:id', (req, res, err) => {

  // Show client with id
  console.log(res.log.request);
  res.status(200).json({status: "200", message: `Requested path: ${req.url}`});

});


clientRouter.post('/', (req, res, err) => {

  // Add new client
  console.log(res.log.request);
  res.status(200).json({status: "200", message: `Requested path: ${req.url}`});

});


clientRouter.put('/:id', (req, res, err) => {

  // Modify client with id
  console.log(res.log.request);
  res.status(200).json({status: "200", message: `Requested path: ${req.url}`});

});


clientRouter.delete('/:id', (req, res, err) => {

  // Delete client with id
  console.log(res.log.request);
  res.status(200).json({status: "200", message: `Requested path: ${req.url}`});

});


clientRouter.post('/:id/csr', (req, res, err) => {

  // CSR drop-off
  console.log(res.log.request);
  res.status(200).json({status: "200", message: `Requested path: ${req.url}`});

});


clientRouter.all('*', (req, res, err) => {

  // Fallback
  console.log(res.log.request);
  res.json({status: "404", message: "Not Found"});

});


module.exports = clientRouter;


