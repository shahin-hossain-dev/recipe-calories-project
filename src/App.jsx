import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import CookTable from "./components/CookTable/CookTable";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  const [wantCookRecipes, setWantCookRecipes] = useState([]);
  const [currentCookRecipes, setCurrentCookRecipes] = useState([]);
  // handle want to cook recipe
  const handleWantToCook = (recipe) => {
    const isCurrentExist = currentCookRecipes.find(
      (currentRecipe) => currentRecipe.recipe_id === recipe.recipe_id
    );
    if (isCurrentExist) {
      toast.error("Recipe already cooking");
    } else {
      const isExist = wantCookRecipes.find(
        (wantCookRecipe) => wantCookRecipe.recipe_id === recipe.recipe_id
      );

      if (!isExist) {
        if (wantCookRecipes.length < 6) {
          const newRecipes = [...wantCookRecipes, recipe];
          setWantCookRecipes(newRecipes);
          toast.success("Recipe added in the table");
        } else {
          toast.error("Not allow over 6 recipes.");
        }
      } else {
        toast.error("Recipe already exist in the table");
      }
    }
  };

  // handle selected recipe
  const handleSelectedRecipe = (recipe) => {
    const newWantCookRecipes = wantCookRecipes.filter(
      (wantCookRecipe) => wantCookRecipe.recipe_id !== recipe.recipe_id
    );
    setWantCookRecipes(newWantCookRecipes);

    const newCurrentRecipes = [...currentCookRecipes, recipe];
    setCurrentCookRecipes(newCurrentRecipes);
  };

  return (
    <div className="w-[95%] lg:w-10/12 mx-auto font-fira ">
      <Navbar />
      <Banner />
      {/* our recipe section start */}
      <div className="mt-12 lg:mt-24">
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
          {/* cook table */}
          <div className="lg:col-span-5 border rounded-2xl py-4 shadow-lg ">
            <CookTable
              wantCookRecipes={wantCookRecipes}
              handleSelectedRecipe={handleSelectedRecipe}
              currentCookRecipes={currentCookRecipes}
            ></CookTable>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
