import React, { useState, createContext, useEffect } from "react";

//importing data
import { housesData } from "../data";

//context creation
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [area, setArea] = useState("Area in sq.ft (any)");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);
    const minArea = parseInt(area.split(" ")[0]);
    const maxArea = parseInt(area.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      const houseArea = parseInt(house.surface);

      if (
        house.country === country &&
        house.type === property &&
        housePrice > minPrice &&
        housePrice <= maxPrice &&
        houseArea > minArea &&
        houseArea <= maxArea
      )
        return house;
      if (
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        isDefault(area)
      )
        return house;
      //one of them is not default
      if (
        !isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        isDefault(area)
      )
        return house.country === country;
      if (
        isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        isDefault(area)
      )
        return house.type === property;
      if (
        isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        isDefault(area)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) return house;
      }
      if (
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        !isDefault(area)
      ) {
        if (houseArea >= minArea && houseArea <= maxArea) return house;
      }

      //two of them is not default
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        isDefault(area)
      )
        return house.country === country && house.type === property;
      if (
        !isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        isDefault(area)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      if (
        isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        isDefault(area)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
      if (
        !isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        !isDefault(area)
      ) {
        if (houseArea >= minArea && houseArea <= maxArea) {
          return house.country === country;
        }
      }
      if (
        isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        !isDefault(area)
      ) {
        if (houseArea >= minArea && houseArea <= maxArea) {
          return house.type === property;
        }
      }
      if (
        isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        !isDefault(area)
      ) {
        if (
          houseArea >= minArea &&
          houseArea <= maxArea &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
        ) {
          return house;
        }
      }
      //three of them is not default
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        isDefault(area)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property && house.country === country;
        }
      }
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        !isDefault(area)
      ) {
        if (houseArea >= minArea && houseArea <= maxArea) {
          return house.country === country && house.type === property;
        }
      }
      if (
        !isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        !isDefault(area)
      ) {
        if (
          houseArea >= minArea &&
          houseArea <= maxArea &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
        ) {
          return house.country === country;
        }
      }
      if (
        isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        !isDefault(area)
      ) {
        if (
          houseArea >= minArea &&
          houseArea <= maxArea &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
        ) {
          return house.type === property;
        }
      }
    });
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  //List of countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  //List of properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        area,
        setArea,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
