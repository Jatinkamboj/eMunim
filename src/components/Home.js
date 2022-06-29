import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavbarHome from "./Navbar/NavbarHome";

function Home() {
  return (
    <>
      <div>
        <NavbarHome/>
        <Card style={{ width: "55rem", marginLeft:"25%",marginTop:"8%"}}>
          <h2 style={{paddingLeft:"1%",paddingTop:"1%"}}>eMunim - The Digital Accountant</h2>
          <Card.Img variant="top" width="100px" height="500px"src="https://img.freepik.com/free-vector/indian-rupee-money-bag_23-2147994222.jpg?w=740"/>
          <Card.Body>
            <Card.Text>
              <h3><label> Welcome to the eMunim. <Link to='/login' style={{textDecoration:"none"}}>Sign in</Link> or <Link to='/signup' style={{textDecoration:"none"}}>Sign up</Link> to get started.</label></h3>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Home;
