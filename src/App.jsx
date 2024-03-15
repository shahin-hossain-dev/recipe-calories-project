import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-[95%] lg:w-10/12 mx-auto font-fira">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
