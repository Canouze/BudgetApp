import './App.css';
import {Register} from "./register";
import {LandingHeader} from "./landingheader"
import {Login} from "./login"
import 'bootstrap/dist/css/bootstrap.css';

//var express = require('express');
//var router = express.Router();
//var grpc = require('@grpc/grpc-js');
//var protoLoader = require('@grpc/proto-loader');

//var PROTO_PATH = __dirname + '/../protos/budgetapp.proto';
//var packageDefinition1 = protoLoader.loadSync(PROTO_PATH);
//var budgetapp_proto = grpc.loadPackageDefinition(packageDefinition1).budgetapp;
//var client = new budgetapp_proto.BudgetService('0.0.0.0:41828', grpc.credentials.createInsecure());

function App() {
  return (
    <div className="container-fluid">
      <LandingHeader/>
      <div className="container-fluid">
        <div class="row">
          <div class="col-lg-6" style={{backgroundColor: "#008B8B"}}>
            <Register/>
          </div>
          <div class="col-lg-6" style={{margin: "auto", backgroundColor: "#FFE4C4"}}>
            <Login/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
