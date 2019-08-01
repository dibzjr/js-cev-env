//  var express = require('express');
 import express from 'express';

// var path = require('path');
import path from 'path';
// var open = require('open');
import open from 'open';

import webpack from 'webpack';
import config from '../webpack.config.dev';





// var port = 3030;
const port = 3030;

// var app = express();
const app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port,(err)=>{
   if(err){
     console.log(err);//eslint-disable-line no-console

   }else{
     open('http://localhost:' + port);
   }
});

