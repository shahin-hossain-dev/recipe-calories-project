import React, { useState } from "react";
import CurrentCookTable from "../CurrentCookTable/CurrentCookTable";

const CookTable = ({
  wantCookRecipes,
  handleSelectedRecipe,
  currentCookRecipes,
}) => {
  return (
    <div>
      <h2 className="text-center border-b text-2xl font-bold font-lexend w-2/3 mx-auto p-3">
        Want to cook:{" "}
        {wantCookRecipes.length < 10 && wantCookRecipes.length > 0
          ? "0" + wantCookRecipes.length
          : wantCookRecipes.length}
      </h2>
      <table className="w-[100%] mx-auto mt-6">
        {/* cook table head  */}
        <thead className="text-base ">
          <tr className=" mb-4  grid grid-cols-12 text-[#282828B3]">
            <th className="col-span-1"></th>
            <th className=" text-start font-medium  col-span-4 ">Name</th>
            <th className=" text-start font-medium  col-span-2">Times</th>
            <th className=" text-start font-medium col-span-2">Calories</th>
            <th className=" text-center font-medium col-span-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className={
                wantCookRecipes.length === 0
                  ? "block text-2xl text-[#282828B3] text-center"
                  : "hidden"
              }
            >
              Table Empty{" "}
            </td>
          </tr>
          {/* cook data row  */}
          {wantCookRecipes.map((wantCookRecipe, idx) => (
            <tr
              key={wantCookRecipe.recipe_id}
              className=" grid grid-cols-12 place-items-center py-4 text-[#282828B3] bg-[#28282808]"
            >
              <th className="col-span-1 text-start">{idx + 1}</th>
              <td className="col-span-4 text-start ">
                {wantCookRecipe.recipe_name}
              </td>
              <td className="col-span-2 text-start">
                {wantCookRecipe.preparing_time} Minutes
              </td>
              <td className="col-span-2 text-start">
                {wantCookRecipe.calories} Calories
              </td>
              <td className="col-span-3">
                <button
                  onClick={() => handleSelectedRecipe(wantCookRecipe)}
                  className="font-lexend px-3 py-1  bg-[#0BE58A] text-base hover:bg-[#35f3a3] active:bg-[#0BE58A]  rounded-full text-[#150B2B]"
                >
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Current table  */}
      <CurrentCookTable
        currentCookRecipes={currentCookRecipes}
      ></CurrentCookTable>
    </div>
  );
};

export default CookTable;
