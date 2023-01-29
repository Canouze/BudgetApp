import React, { useState} from 'react';

function Login(){

  const [form, setForm] = React.useState({
    login_email: '',
    login_password: ''
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //onLogin(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{marginLeft: "10em", marginTop: "10em", marginBottom: "10em"}}>
      <h2>Already a member?</h2>
      <p>Please login...</p>
      <label for="login_email"><b>Email:</b></label>
      <br/>
      <input type="email" placeholder="" id="login_email" value={form.login_email} onChange={handleChange} required/>
      <br/>
      <br/>
      <label for="login_password"><b>Password:</b></label>
      <br/>
      <input type="password" placeholder="" id="login_password" value={form.login_password} onChange={handleChange} required/>
      <br/>
      <br/>
      <button type="submit" className="register">Login</button>
    </form>
  );
}

/*const onLogin = ({foo}) => {
  try{
    client.loginUser({userEmail: foo.login_email, userPassword: foo.login_password}, function (error, response){
      if(response.confirmSuccess){
        console.log(response.userID+"logged in succcessfully.")
      }
      else {
        console.log("No such record exists, please try again")
      }
    })
  }
  catch(error){
    console.log(error);
  }
}*/

export { Login };
