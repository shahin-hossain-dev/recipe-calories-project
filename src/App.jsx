import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import CookTable from "./components/CookTable/CookTable";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";

function App() {
  const [wantCookRecipes, setWantCookRecipes] = useState([]);

  const handleWantToCook = (recipe) => {
    const newRecipes = [...wantCookRecipes, recipe];
    setWantCookRecipes(newRecipes);
  };

  return (
    <div className="w-[95%] lg:w-10/12 mx-auto font-fira">
      <Navbar />
      <Banner />
      {/* our recipe section start */}
      <div className="mt-24">
        <div className="w-10/12 lg:w-8/12 mx-auto space-y-4 text-center">
          <h2 className="font-lexend text-2xl lg:text-3xl font-bold text-[#150B2B]">
            Our Recipes
          </h2>
          <p className="font-lexend text-[#150B2B99]">
            Indulge in our vast recipe collection, curated for every craving and
            occasion. Elevate your culinary experience with tantalizing flavors
            and effortless creations.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-6 mt-6 lg:mt-12">
          <div className="lg:col-span-7">
            <Recipes handleWantToCook={handleWantToCook}></Recipes>
          </div>
          <div className="lg:col-span-5 border rounded-2xl py-4">
            <CookTable wantCookRecipes={wantCookRecipes}></CookTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
