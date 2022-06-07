import HomeScreen from "./component/HomeScreen/HomeScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginScreen from "./component/LoginScreen/LoginScreen";
import SignIn from "./component/SignInScreen/SignIn";
import SignUp from "./component/SignInScreen/SignUp";
import Login from "./component/SignInScreen/Login";
import Subcribe from "./component/Profile/Profile";
import Profile from "./component/Profile/Profile";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "./component/redux/UserSlice";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { useHistory } from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          signIn({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        return;
      }
    });
    return unsub;
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/home"} component={HomeScreen} />
        <Route
          exact
          path={"/"}
          render={() => {
            return <LoginScreen Component={Login} />;
          }}
        />
        <Route
          exact
          path={"/signIn"}
          render={() => {
            return <LoginScreen Component={SignIn} />;
          }}
        />
        <Route
          exact
          path={"/SignUp"}
          render={() => {
            return <LoginScreen Component={SignUp} />;
          }}
        />
        <Route
          exact
          path={"/profile"}
          render={() => {
            return <LoginScreen Component={Profile} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
