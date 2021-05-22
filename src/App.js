import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login'
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import  Payment  from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import  Orders  from "./Orders";

const promise = loadStripe(
  "pk_test_51InjgkSJUzP54MsGJxTlPPY8mHvDqEOE44tauD1DquHEpHnqfFOfjKtF6dRzgvW9Ho9uJKGAq7EXdUKhZhauXeAuR00gwCbbuCw"
);

function App() {

  const [{}, dispatch ]=useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route path="/Orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header/>
            <Home />
          </Route>
          
        </Switch>
      </div>
  </Router>
  );
}

export default App;
