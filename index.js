const nodemon = reqiuire("nodemon");
const express = require('express');
const body-parser = require('body-parser');
const app = express();
app.use(body-parser.urlencoded({extende: true}));

app.get ("/", function (req, res){
  var distance = Number(req.body.n1);
  var time = Number(req.body.n2);
  var speed = distance / time;
  res.send ('Your current speed is: '+ result);
});
app.listen(3000);
