import Foot from "../../common/footer";
import Navbar from "../../common/navbar";
import React, { useState } from 'react';
const Login = (props) => {
    const serializedMap = localStorage.getItem('myMap');
    const [disp,setdisp]=useState("hidden");
    const deserializedMap = new Map(JSON.parse(serializedMap));
    const handle= (e) => {
        id=e;
    };
    const handle2= (e) => {
        pass=e;
  };
  const handlesubmit=(e)=>{
    event.preventDefault();
    if(deserializedMap.get(id) && deserializedMap.get(id)==pass){
        props.setLogin(1);
        setdisp("hidden")
    }
    
    else
    setdisp("");
  }
    return(
        <div>
            <Navbar login={props.login}/><br></br><br></br>
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
          <input type='submit' value="Login" onClick={handlesubmit}></input>
                
                {props.login?<h1>Hello {id}</h1>:<h2 style={{visibility:disp}}>Incorrect Password or email</h2>}
                {props.login?<button onClick={()=>props.setLogin(0)}>Logout?</button>:<></>}
            </form>
            </div>
            <br></br><br></br>
            <Foot/>
        </div>
    );
}

export default Login;