import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "./Header.css";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="header">
      <div className="navbar sticky top-0 text-white max-w-screen-xl mx-auto py-8">
        <div className="flex">
          <a className="btn btn-ghost normal-case text-4xl text-black">
            <div className="flex justify-center items-center">
              <img
                className="h-16 w-16 mr-3 rounded-full"
                src="https://as2.ftcdn.net/v2/jpg/01/99/85/83/1000_F_199858387_FymKsmjdD0Ss2el9eIstS7Y4UaBg5F6B.jpg"
                alt=""
              />
              <img
                className="h-16 w-36"
                src="https://i.ibb.co/rbSBY8S/foody-wpfoody.png"
                alt=""
              />
            </div>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex mx-auto">
          <ul className="menu menu-horizontal px-1">
            <li className="text-3xl text-white">
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li className="text-3xl text-white">
              <ActiveLink to="blog">Blogs</ActiveLink>
            </li>
          </ul>
        </div>

        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end flex">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 mr-2 rounded-full">
                {user ? (
                  <img title={user.displayName} src={user.photoURL} />
                ) : (
                  ""
                )}
              </div>
            </label>
            {user ? (
              ""
            ) : (
              <button className="btn bg-orange-400 text-white mt-3 text-2xl">
                <Link to="/login">LogIn</Link>
              </button>
            )}
            {user && (
              <button
                onClick={handelLogOut}
                className="btn btn-outline btn-error text-black"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
