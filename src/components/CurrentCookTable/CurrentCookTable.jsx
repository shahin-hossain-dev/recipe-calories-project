import React from "react";

const CurrentCookTable = () => {
  return (
    <div>
      <h2 className="text-center border-b text-2xl font-bold font-lexend w-2/3 mx-auto p-3">
        Currently cooking:
      </h2>
      <table className="w-[100%] mx-auto mt-6">
        {/* current cook table head  */}
        <thead className="text-base ">
          <tr className=" mb-4  grid grid-cols-12 text-[#282828B3]">
            <th className="col-span-1"></th>
            <th className=" text-start font-medium  col-span-4 ">Name</th>
            <th className=" text-start font-medium  col-span-2">Times</th>
            <th className=" text-start font-medium col-span-2">Calories</th>
            <th className=" text-center col-span-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {/*current cook data row  */}
          {wantCookRecipes.map((wantCookRecipe, idx) => (
            <tr
              key={wantCookRecipe.recipe_id}
              className=" grid grid-cols-12 place-items-center py-4 text-[#282828B3] bg-[#28282808]"
            >
              <td className="col-span-1">{idx + 1}</td>
              <td className="col-span-4">{wantCookRecipe.recipe_name}</td>
              <td className="col-span-2">
                {wantCookRecipe.preparing_time} Minutes
              </td>
              <td className="col-span-2">{wantCookRecipe.calories} Calories</td>
              <td className="col-span-3">
                {" "}
                <button className=" px-3 py-1  bg-[#0BE58A] text-base  rounded-full text-[#150B2B]">
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentCookTable;
