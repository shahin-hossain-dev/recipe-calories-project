import React from "react";

const CurrentCookTable = ({ currentCookRecipes }) => {
  // calculate time
  const totalTime = currentCookRecipes.reduce((preValue, curValue) => {
    return preValue + curValue.preparing_time;
  }, 0);
  //   calculate Calories
  const totalCalories = currentCookRecipes.reduce((preValue, curValue) => {
    return preValue + parseFloat(curValue.calories);
  }, 0);

  return (
    <div className="mt-12">
      <h2 className="text-center border-b text-2xl font-bold font-lexend w-2/3 mx-auto p-3">
        Currently cooking:{" "}
        {currentCookRecipes.length < 10 && currentCookRecipes.length > 0
          ? "0" + currentCookRecipes.length
          : currentCookRecipes.length}
      </h2>

      <table className="w-[100%] mx-auto mt-6">
        {/* current cook table head  */}
        <thead className="text-base ">
          <tr className=" mb-4  grid grid-cols-12 place-items-start text-[#282828B3]">
            <th className="col-span-1"></th>
            <th className=" text-start font-medium  col-span-5 ">Name</th>
            <th className=" text-start font-medium  col-span-3">Times</th>
            <th className=" text-start font-medium col-span-3 ">Calories</th>
          </tr>
        </thead>
        <tbody>
          {/* Empty text display  */}
          <tr>
            <td
              className={
                currentCookRecipes.length === 0
                  ? "block text-2xl text-[#282828B3] text-center"
                  : "hidden"
              }
            >
              Table Empty
            </td>
          </tr>
          {/*current cook data row  */}
          {currentCookRecipes.map((currentCookRecipe, idx) => (
            <tr
              key={currentCookRecipe.recipe_id}
              className=" grid grid-cols-12 place-items-start p-4 text-[#282828B3] bg-[#28282808]"
            >
              <th className="col-span-1 text-start">{idx + 1}</th>
              <td className="col-span-5 text-start">
                {currentCookRecipe.recipe_name}
              </td>
              <td className="col-span-3 text-start ">
                {currentCookRecipe.preparing_time} minutes
              </td>
              <td className="col-span-3 text-start ">
                {currentCookRecipe.calories} calories
              </td>
            </tr>
          ))}
          <tr className="border-t grid grid-cols-12 place-items-center mt-6 p-4 text-[#282828B3] ">
            <th className="col-span-4 text-lg text-start">Calculation</th>

            <td className="col-span-4 text-start font-medium text-lg">
              Total Time= <br></br> {totalTime} minutes
            </td>
            <td className="col-span-4 text-start font-medium text-lg">
              Total Calories= <br></br> {totalCalories} calories
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurrentCookTable;
