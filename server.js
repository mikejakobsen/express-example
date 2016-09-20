  /*
   *	running express 
   *	--------------------------------------------------------
   *	Source: Mean machine
   */

  var express = require('express');
  var app = express();
  var path = require('path');

  // getting an instance of the router
  var basicRouter = express.Router();
  var adminRouter = express.Router();
  var apiRouter = express.Router();


  adminRouter.use(function(req, res, next) {

      // logs of each request
      console.log(req.method, req.url);

      // to do next and go to the route 
      next();
  });
  // output of the middleware for every request 
  // listening at localhost: 1337
  // GET / posts
  // GET /
  // GET / users
  // GET / users


  // admin main page  http://localhost:1337/admin
  adminRouter.get('/', function(req, res) {
      res.send('Admin');
  });

  // showing the users http://localhost:1337/admin/users
  adminRouter.get('/users', function(req, res) {
      res.send('All the users');
  });

  // showing the users/:name http://localhost:1337/admin/users/:name
  adminRouter.get('/users/:name', function(req, res) {
      res.send('hello  ' + req.params.name + '!');
  });


  // showing the posts http://localhost:1337/admin/posts
  adminRouter.get('/posts', function(req, res) {
      res.send('All posts');
  });

  // seinding the html file
  basicRouter.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + '/index.html'));
  });




  // apply the routes to the app
  app.use('/', basicRouter);
  app.use('/admin', adminRouter);
  app.use('/api', apiRouter);






  // starting the server
  app.listen(3000);
  console.log('listening at localhost:3000');
