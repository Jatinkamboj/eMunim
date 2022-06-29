import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import NavbarHome from "./Navbar/NavbarHome";

function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json) {
      // Save the auth token and redirect
      if(json.token)
      {      sessionStorage.setItem("token", json.token);
            props.fetch();
            props.fetchUser();
            props.setLoggedIn(true);
            navigate("/");
            // console.log("entered")
            // console.log(a);
            props.forceUpdate();
      }

      else {
        window.alert("Invalid credentials");
      }
    } else {
      window.alert("Invalid credentials");
    }
  };

  const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <>
    <NavbarHome/>
      {!props.loggedIn && <form
        style={{ maxWidth: "25%", marginLeft: "35%", marginTop: "15%" }}
        onSubmit={handleSubmit}
      >
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={onChange}
            name="email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={onChange}
            name="password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="signup text-right">
          Be a part of our community <Link to="/signup">Sign Up</Link>
        </p>
      </form>}
    </>
  );
}

export default Login;
