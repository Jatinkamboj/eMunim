import * as MdIcons from "react-icons/md";
import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "../App.css";


function Settings(props) {

  let navigate = useNavigate();
  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);
  const [pass, setPass] = useState()
  const [image, setImage] = useState();


  const handleUpdate = async () => {
    console.log(props.user);
    let tempData = {
      name: name,
      password: pass,
      email: email,
      img: image,
    };
    const response = await fetch(
      `http://localhost:5000/editProfile/${props.user._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": sessionStorage.getItem("token"),
        },
        body: JSON.stringify(tempData),
      }
    );
    const json = await response.json();
    console.log(json);
    props.fetchUser();
  };

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:5000/deleteUser/${props.user._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": sessionStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    if (json) {
      console.log(json);
      sessionStorage.clear();
      props.setLoggedIn(false);
      navigate("/");
    }
  };

  return (
    <>
      <table
        className="ui celled table"
        style={{
          marginTop: "100px",
          maxWidth: "40%",
          marginLeft: "32%",
          border: "none",
        }}
      >
        <tbody>
          <tr style={{ border: "none" }}>
            <td style={{ border: "none" }} className="center aligned">
              <div className="button-container">
                <label>
                  <img
                    src={props.user.img}
                    id="output"
                    height={120}
                    width={125}
                    style={{ borderRadius: "50%" }}
                    alt="avatar"
                  />
                </label>
              </div>
            </td>
          </tr>

          <tr style={{ border: "none" }}>
            <td style={{ border: "none" }}>
              <div className="form-floating mb-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
            </td>
          </tr>

          <tr style={{ border: "none" }}>
            <td style={{ border: "none" }}>
              <div className="form-floating mb-7">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
            </td>
          </tr>

          <tr style={{ border: "none" }}>
            <td style={{ border: "none" }}>
              <div className="form-floating mb-7">
                <input
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                  type="url"
                  className="form-control"
                  placeholder="Image Url"
                />
                <label htmlFor="floatingInput">Image URL</label>
              </div>
            </td>
          </tr>

          <tr style={{ border: "none" }}>
            <td style={{ border: "none" }}>
              <div className="form-floating mb-7">
                <input
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                  placeholder="password"
                />
                <label htmlFor="floatingInput">Password</label>
              </div>
            </td>
          </tr>

          <tr style={{ border: "none" }}>
            <td style={{ border: "none" }} className="center aligned">
              <Button color="green" onClick={handleUpdate}>
                Update Details
              </Button>
            </td>
          </tr>

          <tr style={{ border: "none" }}>
            <td style={{ border: "none" }}>
              <Button color="red" onClick={handleDelete}>
                Delete Account
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Settings;
