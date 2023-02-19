import React, { useContext, useState } from "react";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { BiArea } from "react-icons/bi";
import { HouseContext } from "./HouseContext";
//importing headless ui
import { Menu } from "@headlessui/react";

const AreaDropdown = () => {
  const { area, setArea } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(true);
  const surface = [
    {
      value: "Area in sq.ft (any)",
    },
    {
      value: "1000 - 2000",
    },
    {
      value: "2000 - 3000",
    },
    {
      value: "3000 - 4000",
    },
    {
      value: "4000 - 5000",
    },
    {
      value: "5000 - 6000",
    },
    {
      value: "6000 - 7000",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiArea className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{area}</div>
          <div className="text-[13px]">Choose surface area</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {surface.map((area, index) => {
          return (
            <Menu.Item
              onClick={() => setArea(area.value)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {area.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AreaDropdown;
