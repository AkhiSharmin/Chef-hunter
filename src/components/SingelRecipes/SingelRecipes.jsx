import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SingelRecipes = ({ recipe }) => {
  console.log(recipe);

  //distrusting
  const { favorite, rating, cooking_method, ingredients, recipe_name } = recipe;
  const [disable, setDisable] = useState(false);

  const handelFavorite = () => {
    setDisable(true);
    return toast("Already Added this one Favorite!");
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-5">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-orange-500">
            {recipe_name}
          </h2>
          <div>
            {ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </div>
          <p>Cooking Method: {cooking_method}</p>
          <p className="flex items-center">
            <span className="mr-2">Ratings:{rating}</span>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </p>
          <div className="card-actions justify-start">
            <button
              onClick={handelFavorite}
              className={`btn bg-orange-500 text-white ${
                disable ? "btn-disabled" : ""
              }`}
            >
              Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingelRecipes;
