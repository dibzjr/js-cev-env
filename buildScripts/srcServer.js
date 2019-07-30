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


app.listen(port,(err)=>{
   if(err){
     console.log(err);//eslint-disable-line no-console

   }else{
     open('http://localhost:' + port);
   }
});

