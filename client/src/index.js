import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//var express = require('express');
//var router = express.Router();
//var grpc = require('@grpc/grpc-js');
//var protoLoader = require('@grpc/proto-loader');

//var PROTO_PATH = __dirname + '/../protos/budgetapp.proto';
//var packageDefinition1 = protoLoader.loadSync(PROTO_PATH);
//var budgetapp_proto = grpc.loadPackageDefinition(packageDefinition1).budgetapp;
//var client = new budgetapp_proto.BudgetService('0.0.0.0:41828', grpc.credentials.createInsecure());



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
