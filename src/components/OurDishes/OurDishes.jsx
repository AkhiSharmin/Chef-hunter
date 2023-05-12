import React from "react";

const OurDishes = () => {
  return (
    <div className="my-40 max-w-screen-xl mx-auto md:flex gap-28 justify-center items-center py-28">
      <div className="mt-10">
        <h1 className="text-5xl border border-black p-5 mb-10 text-black font-bold text-center leading-relaxed">
          Have a look to our
          <span className="text-orange-500"> Bread</span> dishes!
        </h1>
        <p className="my-5 text-2xl text-slate-500 leading-relaxed">
          Each food is handmade at the crack of dawn, using only the simplest of
          ingredients to bring out smells and flavors that beckon the whole
          block. Stop by anytime and experience simplicity at its finest.
        </p>
      </div>
      <div>
        <div className="h-96 carousel carousel-vertical rounded">
          <div className="carousel-item h-full">
            <img
              style={{ width: "1000px", height: "100%" }}
              src={
                "https://images.pexels.com/photos/8520760/pexels-photo-8520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
          </div>
          <div className="carousel-item h-full">
            <img
              style={{ width: "500px", height: "100%" }}
              src={
                "https://images.pexels.com/photos/14411697/pexels-photo-14411697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
          </div>
          <div className="carousel-item h-full">
            <img
              style={{ width: "500px", height: "100%" }}
              src={
                "https://img.freepik.com/premium-photo/chinese-noodles-stir-fried-with-vegetables-chow-mein_71919-834.jpg?w=1060"
              }
            />
          </div>
          <div className="carousel-item h-full">
            <img
              style={{ width: "500px", height: "100%" }}
              src={
                "https://img.freepik.com/premium-photo/spicy-salad-egg-yolks-with-vegetable-hot-spicy-tasty_71919-672.jpg?w=1380"
              }
            />
          </div>
          <div className="carousel-item h-full">
            <img
              style={{ width: "500px", height: "100%" }}
              src={
                "https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34687.jpg?w=996&t=st=1683067275~exp=1683067875~hmac=317d60be60308007e5fbd2e00898b6656a3bc9418e5c2402967d3504f26fae94"
              }
            />
          </div>
          <div className="carousel-item h-full">
            <img
              style={{ width: "500px", height: "100%" }}
              src={
                "https://img.freepik.com/premium-photo/papaya-salad-som-tum-thai-white_62856-4306.jpg?w=1060"
              }
            />
          </div>
          <div className="carousel-item h-full">
            <img
              style={{ width: "500px", height: "100%" }}
              src={
                "https://img.freepik.com/free-photo/tagliatelle-pasta-with-tomatoes-chicken_2829-18003.jpg?w=996&t=st=1683066820~exp=1683067420~hmac=8650e61788bd74d214b16d4808fb07b349868a76763a9dcda37d99677edd0a99"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDishes;
