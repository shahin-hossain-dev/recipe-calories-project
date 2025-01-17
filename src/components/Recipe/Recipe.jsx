import React from "react";
import { FiClock } from "react-icons/fi";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = ({ recipe, handleWantToCook }) => {
  const {
    recipe_id,
    recipe_image,
    recipe_name,
    short_description,
    preparing_time,
    ingredients,
    calories,
  } = recipe;
  return (
    <div>
      {/* recipe Card */}
      <div className="card border p-5 bg-base-100 shadow-xl h-full">
        <figure>
          <img
            src={recipe_image}
            className="w-full lg:h-[200px]  rounded-2xl"
            alt="Recipe"
          />
        </figure>
        {/* recipe Card Body*/}
        <div className="flex flex-col justify-between h-full mt-6">
          <h2 className="card-title ">{recipe_name}</h2>
          {/* <p>
            {short_description.length > 60
              ? short_description.split("").slice(0, 60).join("") + "..."
              : short_description}
          </p> */}
          <p>{short_description}</p>
          <hr />
          <div>
            <p className="text-xl font-medium mb-4">
              Ingredients: {ingredients.length}
            </p>
            <ul className="text-[#878787]">
              {ingredients.slice(0, 5).map((ingredient, idx) => (
                <li key={idx} className="list-disc ms-4">
                  {ingredient}
                </li>
              ))}
              {ingredients.length > 6 && "& More Ingredients..."}
            </ul>
          </div>
          <hr />
          <div className="flex justify-between items-center text-[#282828CC]">
            <p className="flex items-center justify-center">
              <FiClock className="text-xl me-2" />
              <span>{preparing_time} minutes</span>
            </p>
            <p className="flex items-center justify-center">
              <AiOutlineFire className="text-xl me-2" />
              <span>{calories} calories</span>
            </p>
          </div>
          <div>
            <button
              onClick={() => handleWantToCook(recipe)}
              className="btn px-6 bg-[#0BE58A]  rounded-full text-[#150B2B]"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
