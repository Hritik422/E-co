import React, { useState } from 'react';
import './LoginRegistration.css'; 
import Navbar from '../../common/navbar';
import Foot from '../../common/footer';

const Register = (props) => {
    let users = new Map([[0,0]]);
  const [email, setEmail] = useState(users);
let id,pass;

  const handle= (e) => {
      id=e;
  };
  const handle2= (e) => {
      pass=e;
};
const handlesubmit=(e)=>{
    e.preventDefault();
    let nuser=new Map(([]));
    nuser=email;
    nuser.set(id,pass);
    setEmail(nuser);
    localStorage.setItem('myMap', JSON.stringify(Array.from(email.entries())));
}

  return (
    <><Navbar/><br></br><br></br>
    <div className="login-registration-container">
      <form className="login-registration-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => handle(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => handle2(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <input type='submit' value="Register" onClick={handlesubmit}></input>
      </form>
    </div><br></br><br></br>
    <Foot/>
    </>
  );
};

export default Register;
