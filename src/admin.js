const adminRouter = require('express').Router();


/* Define admin requests here */


adminRouter.all('*', (req, res, err) => {

  // Fallback
  console.log(res.log.request);
  res.status(404).json({status: "404", message: "Not Found"});

});


module.exports = adminRouter;


