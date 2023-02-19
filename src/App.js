import "./App.css";
// importing routes
import { Route, Routes } from "react-router-dom";
// importing components
import Header from "./components/Header";
import Search from "./components/Search";
import HouseList from "./components/HouseList";
// importing pages

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <h1 className="text-4xl font-[560] py-6 max-w-[1170px] mx-auto">
        Search properties to rent
      </h1>
      <Search />
      <HouseList />
    </div>
  );
}

export default App;
