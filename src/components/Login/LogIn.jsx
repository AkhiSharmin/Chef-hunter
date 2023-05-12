import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const LogIn = () => {
  const { handelLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const createLogIn = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    //login function
    handelLogIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        from.reset();
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //google function
  const handelGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //github function
  const handelGithubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={createLogIn}>
      <div className="max-w-3xl mx-auto border border-stone-200 p-10 rounded bg-white shadow-2xl my-28">
        <div className="form_title">
          <h1 className="text-5xl text-black font-bold">Login</h1>
        </div>
        <label>
          <input
            className="btnInput btnn"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            rounded
            required
          />
        </label>
        <label>
          <input
            className="btnInput btnn"
            type="password"
            placeholder="Enter Password"
            name="Password"
            id="password"
            rounded
            required
          />
        </label>

        <div className="remember_me">
          <input
            className="input-checkbox"
            type="checkbox"
            name="remember_me"
            id="ckb1"
          />
        </div>
        <input
          className="text-2xl font-bold text-white btn bg-slate-800 text-center ml-72"
          type="submit"
          value="login"
        />
        <p className="my-5 text-black text-2xl text-center">
          Don't have an Account?{" "}
          <span className="text-red-400 font-bold">
            <Link to="/singUp">SingUp</Link>
          </span>
        </p>
        <button
          onClick={handelGoogleLogin}
          className="text font-bold text-white btn border-0  bg-slate-800 text-center my-4 w-full"
        >
          <FaGoogle className="text-2xl mr-2"></FaGoogle>
          Login with Google
        </button>
        <button
          onClick={handelGithubLogin}
          className="text font-bold text-white btn border-0  bg-slate-800 text-center my-2 w-full"
        >
          <FaGithub className="text-2xl mr-2"></FaGithub>
          Login with GitHub
        </button>
      </div>
    </form>
  );
};

export default LogIn;
