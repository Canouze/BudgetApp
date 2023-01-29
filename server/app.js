var grpc = require("@grpc/grpc-js")
var protoLoader = require("@grpc/proto-loader")
var PROTO_PATH = __dirname + "/protos/proto.proto"
var packageDefinition = protoLoader.loadSync(PROTO_PATH)
var proto = grpc.loadPackageDefinition(packageDefinition).package_name

//require mysql package
var mysql = require('mysql');

//connect to mysql database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "budgetappdb"
});

//initiate conection to mysql database and log success message if succeeded
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");


function registerUser(call, callback){
  try{
    var user_fname=call.request.user.fname;
    var user_lname=call.request.user.lname;
    var user_email=call.request.user.email;
    var user_dob=call.request.user.dob;
    var user_password=call.request.user.password;
    var user_phonenum=call.request.user.phonenum;
    var sql_instruct = "INSERT INTO app_user (user_fname, user_lname, user_email, user_password, user_phonenum) VALUES ('"+user_fname+"', '"+userlname+"', '"+user_email+"', '"+user_dob+"', '"+user_password+"', '"+user_phonenum+"');";
    con.query(sql_instruct, function (err, result) {
      if (err) throw err;
      console.log("User Registered Successfully");
      callback(null, {
        employeeResult: "User Registered Successfully."
      })
    });
  }
  catch(e){
    console.log(e);
    callback(null, {
      message: "An error occurred"
    })
  }
}

function loginUser(call, callback){
  try{
    var user_email=call.request.userEmail;
    var user_password=call.request.userPassword;
    var sql_instruct = "SELECT * FROM app_user WHERE EXISTS (SELECT * FROM app_user WHERE app_user.user_email="+user_email+" && app_user.user_password="+user_password+")";
    con.query(sql_instruct, function (err, result) {
      if (err) throw err;
      else if(!result){
        console.log("No such record exists, please try again...")
        callback(null, {confirmSuccess: false, userID: 0})
      }}
      else{
        console.log("User Registered Successfully");
        callback(null, {
          confirmSuccess: true, userID: result.user_id
        })
      }
    });
  }
  catch(e){
    console.log(e);
    callback(null, {
      message: "An error occurred"
    })
  }
}



var server = new grpc.Server()
server.bindAsync("0.0.0.0:41828", grpc.ServerCredentials.createInsecure(), function() {
  server.start()
})
