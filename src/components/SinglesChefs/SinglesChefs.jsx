import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

//destructuring all data

const SinglesChefs = ({ data }) => {
  const {
    id,
    chef_picture,
    chef_name,
    likes,
    view,
    bio,
    rating,
    years_of_experience,
    number_recipes,
  } = data;
  console.log(likes);

  const handelViewButton = (id) => {
    console.log(id);
  };

  return (
    //show everySingle chefs
    <div>
      <div className="card bg-base-100 shadow-2xl p-8 rounded">
        <figure>
          <LazyLoad>
            <img className="p-4 rounded" src={chef_picture} alt="Shoes" />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span className="text-3xl text-orange-500">{chef_name}</span>
          </h2>
          <p className="text-2xl text-slate-500 my-3">{bio}</p>
          <p style={{ fontSize: "14px" }}>
            Number Of Recipes: {number_recipes}
          </p>
          <div className="flex" style={{ fontSize: "14px" }}>
            <p>Experience: {years_of_experience}</p>
            <p>Likes: {likes}</p>
          </div>
          <p className="flex items-center" style={{ fontSize: "14px" }}>
            <span className="mr-2">Ratings:{rating}</span>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </p>
          <div className="card-actions justify-start">
            <Link to={`/viewRecipes/${id}`}>
              <button
                onClick={handelViewButton}
                className="btn bg-orange-500 border-white font-semibold txt-2xl mt-3"
              >
                {view}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglesChefs;
