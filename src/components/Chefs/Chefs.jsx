import React, { useEffect, useState } from "react";
import SinglesChefs from "../SinglesChefs/SinglesChefs";
import "./Chefs.css";

const Chefs = () => {
  const [allData, AllSetData] = useState([]);

  useEffect(() => {
    fetch("https://server-chef-hunter.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => AllSetData(data))
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <>
      <div className="">
        <h2 className="text-7xl font-bold text-center text-orange-500 mt-20">
          Switzerland
        </h2>
        <p className="text-4xl text-orange-400 font-bold text-center">
          Our Chefs
        </p>
      </div>
      <div className="my-28 max-w-screen-xl grid md:grid-cols-3 gap-8 rounded mx-auto">
        {allData.length === 0 ? (
          <div className="radial-progress bg-primary text-primary-content border-4 border-primary chefs">
            70%
          </div>
        ) : (
          allData.map((data) => (
            <SinglesChefs key={data.id} data={data}></SinglesChefs>
          ))
        )}
      </div>
    </>
  );
};

export default Chefs;
