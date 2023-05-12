import React from "react";
import { useLoaderData } from "react-router-dom";
import SingelRecipes from "../SingelRecipes/SingelRecipes";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ViewRecipes = () => {
  const recipeData = useLoaderData();

  const { chef_picture, chef_name } = recipeData;
  const { recipes } = recipeData;

  // console.log(recipes);

  return (
    <>
      <div className="max-w-screen-xl mx-auto my-32">
        <h2 className="text-7xl font-bold text-center text-orange-500 mb-12">
          Recipes Details
        </h2>

        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-auto"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={chef_picture}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {chef_name}
            </h5>
          </div>
        </a>
        <div className="flex justify-center gap-4 mt-8">
          {recipes.map((recipe) => (
            <SingelRecipes recipe={recipe}></SingelRecipes>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewRecipes;
