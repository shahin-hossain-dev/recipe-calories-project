import React from "react";

const Recipe = ({ recipe }) => {
  const {
    recipe_id,
    recipe_image,
    recipe_name,
    preparing_time,
    ingredients,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card p-5 bg-base-100 shadow-xl">
        <figure>
          <img
            src={recipe_image}
            className="w-full h-[200px] rounded-2xl"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
