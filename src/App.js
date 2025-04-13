import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { Elements } from "@stripe/react-stripe-js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import Payment from "./Payment";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Order from "./Orders";

function App() {
  const [{}, dispatch] = useStateValue();
  const promise = loadStripe(
    "pk_test_51P2sNILRW00UR6sMPYgiICnrN67HzoL5g4soWSik1LVB6n4HxtSXGVk3oO31rXtoITKVQlkxvgUVrLr5yioQY0WP00Jcdg41Ve"
  );

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
    // Use Router to wrap Routes
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Order/>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
               {/* // Higher order functions  */}
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>{" "}
              </>
            }
          />
          <Route
            path="/Login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
