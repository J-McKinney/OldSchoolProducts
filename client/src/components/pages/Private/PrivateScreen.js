import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import Styles from "./PrivateScreen.module.css";

const PrivateScreen = () => {
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
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <div>{privateData} Private Landing Screen</div>
      <Link to="/shop">
        <Button variant="primary">Shop</Button>
      </Link>
      <Link to="/checkout">
        <Button variant="primary">Checkout</Button>
      </Link>
    </>
  );
};

export default PrivateScreen;
