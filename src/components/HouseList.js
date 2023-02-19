import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import House from "./House";
import { ImSpinner2 } from "react-icons/im";

export default function HouseList() {
  const { houses, loading } = useContext(HouseContext);
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  if(houses.length<1){
    return <div className="text-center text-3xl text-gray-400 mt-48">No results</div>
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {houses.map((house) => {
            return (
              <House house={house} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
