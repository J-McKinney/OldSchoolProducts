import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import Styles from "./CheckoutScreen.module.css";

const Checkout = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);

  const logout = async () => {
    localStorage.removeItem("authToken");
  };

  return error ? (
    <>
      <span className="error-message">{error}</span>
      <Link to="/login">
        <Button variant="primary">Login</Button>
      </Link>
    </>
  ) : (
    <>
      <div>{privateData} Checkout Screen</div>
      <Link to="/shop">
        <Button variant="primary">Shop</Button>
      </Link>
      <Link to="/">
        <Button variant="primary">Private Screen</Button>
      </Link>
      <Link to="/login">
        <Button onClick={logout} variant="primary">
          Logout
        </Button>
      </Link>
    </>
  );
};

export default Checkout;
