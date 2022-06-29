import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import NavbarHome from './Navbar/NavbarHome';

function SignUp() {

  const [user, setUser] = useState({name:"", email: "", password: "" });
  const [errorPass, setErrorPass] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorName, setErrorName] = useState(false)
  let navigate = useNavigate(); 

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      }),
    });
    const json = await response.json();
   
    if(json.errors){
      // eslint-disable-next-line
      json.errors.map(it=>{
       
        if(it.param === "password"){
          setErrorPass(true);
        }
        else if(it.param === "email"){
          
          setErrorEmail(true);
        }
        else{
          setErrorName(true);
        }
      })
    }
    else{
      if (json) {
        // Save the auth token and redirect
        window.alert("Account Created Successfully");
        navigate("/login");
  
      } else {
        window.alert("Please provide valid data");
      }
    }
  }

  const onChange = (e)=>{
    setUser({...user, [e.target.name]: e.target.value})
    setErrorEmail(false);
    setErrorName(false);
    setErrorPass(false);
}

  return (
    <>
    <NavbarHome/>
        <form style={{ maxWidth: "25%", marginLeft: "35%", marginTop: "10%" }} onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name"
            onChange={onChange}
            />
            {errorName && <label style={{color:"red",fontSize:"0.8em"}}>* Min length is 3</label>}
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={onChange}
          />
          {errorEmail && <label style={{color:"red",fontSize:"0.8em"}}>* Enter valid email</label>}
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            onChange={onChange}
          />
          {errorPass && <label style={{color:"red",fontSize:"0.8em"}}>* Min length is 8</label>}
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">sign in?</Link>
        </p>
      </form>
    </>
  )
}

export default SignUp