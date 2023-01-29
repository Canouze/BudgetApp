import React from 'react';

export function Register() {
  return (
    <form onSubmit="registerSubmit()" style={{marginTop: "5em", marginLeft: "2em", marginBottom: "5em"}}>
      <h2>New to BudgetApp?</h2>
      <p>We need some details to get started...</p>
      <div className="row" style={{margin: "1em"}}>
        <div className="col">
          <label for="fname"><b>First Name</b></label>
          <br/>
          <input type="text" placeholder="" name="fname" style={{width: "250px"}} required/>
        </div>
        <div className="col">
          <label for="lname"><b>Last Name</b></label>
          <br/>
          <input type="text" placeholder="" name="lname" style={{width: "250px"}} required/>
        </div>
      </div>
      <div className="row" style={{margin: "1em"}}>
        <label for="email"><b>Email Address</b></label>
        <br/>
        <input type="email" placeholder="" name="email" style={{marginLeft: "10px", width: "400px"}} required/>
      </div>
      <div className="row" style={{margin: "1em"}}>
        <label for="phone"><b>Phone Number</b></label>
        <br/>
        <input type="tel" placeholder="" name="phone" style={{marginLeft: "10px", width: "300px"}} required/>
      </div>
      <div className="row" style={{margin: "1em"}}>
        <label for="dob"><b>Date of Birth</b></label>
        <br/>
        <input type="date" placeholder="" name="dob" style={{marginLeft: "10px", width: "200px"}} required/>
      </div>
      <div class="row" style={{margin: "1em"}}>
        <div class="col">
          <label for="password"><b>Enter Password</b></label>
          <br/>
          <input type="password" placeholder="" name="password" style={{width: "250px"}} required/>
        </div>
        <div class="col">
          <label for="password_confirm"><b>Confirm Password</b></label>
          <br/>
          <input type="password" placeholder="" name="password_confirm" style={{width: "250px"}} required/>
        </div>
      </div>
      <div class="row" style={{margin: "2em", width: "100px"}}>
        <button type="submit" className="register">Sign Up</button>
      </div>
    </form>
  );
}
