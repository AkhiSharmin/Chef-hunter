import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SingUp = () => {
  const [error, setError] = useState(" ");

  const { handelSingUp } = useContext(AuthContext);
  const createSingUp = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    const name = from.name.value;
    const photoUrl = from.photoUrl.value;
    // console.log(email, password, name, photoUrl);
    setError("");
    if (password.length < 6) {
      setError("It's should be 6 character");
    }

    handelSingUp(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        handelUpdate(loggedUser, name, photoUrl);
        from.reset();
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handelUpdate = (loggedUser, name, photoUrl) => {
    updateProfile(loggedUser, { displayName: name, photoURL: photoUrl });
  };

  return (
    <div>
      <form onSubmit={createSingUp}>
        <div className="max-w-3xl mx-auto border border-stone-200 p-10 my-28 rounded bg-white shadow-2xl">
          <div className="form_title">
            <h1 className="text-5xl text-black font-bold">SingUp</h1>
          </div>
          <label>
            <input
              className="btnInput btnn"
              type="text"
              placeholder="Enter Your Name"
              name="name"
              rounded
              required
            />
          </label>
          <label>
            <input
              className="btnInput btnn"
              type="text"
              placeholder="Photo Url"
              name="photoUrl"
              rounded
              required
            />
          </label>
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
              id="password"
              placeholder="Enter Password"
              name="Password"
              rounded
              required
            />
            <p className="text-orange-500 text-2xl my-2">{error}</p>
          </label>

          <div className="remember_me">
            <input
              className="input-checkbox"
              type="checkbox"
              name="remember_me"
            />
          </div>
          <input
            className="text-2xl font-bold text-white btn bg-slate-800 text-center ml-72"
            type="submit"
            value="SingUp"
          />
          <p className="my-5 text-black text-2xl text-center">
            Already have an Account?{" "}
            <span className="text-red-400 font-bold">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
