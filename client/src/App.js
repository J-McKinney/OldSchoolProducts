import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/pages/Private/PrivateScreen";
import LoginScreen from "./components/pages/Login/LoginScreen";
import RegisterScreen from "./components/pages/Register/RegisterScreen";
import ForgotPasswordScreen from "./components/pages/ForgotPassword/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/pages/ResetPassword/ResetPasswordScreen";
import ShoppingScreen from "./components/pages/Shopping/ShoppingScreen";
import CheckoutScreen from "./components/pages/Checkout/Checkout";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Public routes */}
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
          {/* Public routes */}

          {/* We want to protect these routes */}
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <PrivateRoute exact path="/shop" component={ShoppingScreen} />
          <PrivateRoute exact path="/checkout" component={CheckoutScreen} />
          {/* We want to protect these routes */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
