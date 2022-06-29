import "./App.css";
import React, { useEffect, useState } from "react";
import Reports from "./components/Reports";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import TransactionOverview from "./components/Transactions/TransactionOverview";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard";
import CurrencyExchange from "./components/CurrencyExchange";
import Settings from "./components/Settings";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Error from "./components/Error";

function useForceUpdate() {
  // eslint-disable-next-line
  const [value, setValue] = useState(0);
  // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const forceUpdate = useForceUpdate();
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") ? true : false);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/allTransactions", {
      method: "GET",
      headers: {
        "auth-token": sessionStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setData(json);
  };

  const fetchUser = async () => {
    const response = await fetch("http://localhost:5000/getUser", {
      method: "POST",
      headers: {
        "auth-token": sessionStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // console.log(json.name);
    setUser(json);
  };

  useEffect(() => {
    if (loggedIn) {
      fetchData();
      fetchUser();
    }
  }, []);

  return (
    <>
      {loggedIn && (
        <Navbar
          loggedIn={loggedIn}
          forceUpdate={forceUpdate}
          setLoggedIn={setLoggedIn}
          user={user}
        />
      )}
      <Routes>
        {loggedIn && (
          <Route
            path="/"
            element={
              <Dashboard
                loggedIn={loggedIn}
                data={data}
                fetch={fetchData}
                forceUpdate={forceUpdate}
              />
            }
          ></Route>
        )}
        {!loggedIn && <Route path="/" element={<Home />}></Route>}
        {loggedIn && (
          <Route
            eaxct
            path="/transactions"
            element={<TransactionOverview data={data} fetch={fetchData} />}
          ></Route>
        )}
        {/* {loggedIn && (
          <Route
            exact
            path="/reports"
            element={<Reports data={data} />}
          ></Route>
        )} */}
        {loggedIn && (
          <Route
            exact
            path="/currencyExchange"
            element={<CurrencyExchange />}
          ></Route>
        )}
        {loggedIn && (
          <Route
            exact
            path="/settings"
            element={
              <Settings
                setLoggedIn={setLoggedIn}
                forceUpdate={forceUpdate}
                fetchUser={fetchUser}

                // fetch={fetchData}
                user={user}
              />
            }
          ></Route>
        )}
        {!loggedIn ? (
          <Route
            exact
            path="/login"
            element={
              <Login
                forceUpdate={forceUpdate}
                fetch={fetchData}
                fetchUser={fetchUser}
                setLoggedIn={setLoggedIn}
              />
            }
          ></Route>
        ) : (
          <Route
            exact
            path="/login"
            element={<Error />}
            loggedIn={loggedIn}
          ></Route>
        )}
        {!loggedIn ? (
          <Route
            exact
            path="/signup"
            element={<SignUp forceUpdate={forceUpdate} />}
          ></Route>
        ) : (
          <Route
            exact
            path="/signup"
            element={<Error />}
            loggedIn={loggedIn}
          ></Route>
        )}
      </Routes>
    </>
  );
}

export default App;
