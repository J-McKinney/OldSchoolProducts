import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/pages/Private/PrivateScreen";
import LoginScreen from "./components/pages/Login/LoginScreen";
import RegisterScreen from "./components/pages/Register/RegisterScreen";
import ForgotPasswordScreen from "./components/pages/ForgotPassword/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/pages/ResetPassword/ResetPasswordScreen";
// import ShoppingScreen from "./components/pages/Shopping/ShoppingScreen";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          {/* We want to protect these routes */}
          <PrivateRoute exact path="/" component={PrivateScreen} />
          {/* <PrivateRoute exact path="/shop" component={ShoppingScreen} /> */}
          {/* We want to protect these routes */}
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
        </Switch>
      </div>
    </Router>
  );
};

export default App;
