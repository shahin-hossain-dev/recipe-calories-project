import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";

function App() {
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
          <div className="lg:col-span-8">
            <Recipes />
          </div>
          <div className="lg:col-span-4 border rounded-2xl py-4">
            <h2 className="text-center border-b text-2xl font-bold font-lexend w-2/3 mx-auto p-3">
              Want to cook
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
