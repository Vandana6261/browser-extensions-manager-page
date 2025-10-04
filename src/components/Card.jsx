import React, { useState } from "react";
import data from "../data.json";
import img from "../assets/images/icon-moon.svg";
import tempLogo from "../assets/logo-console-plus.svg"

function Card({ isActive, setIsActive }) {
  
  const [extension, setExtension] = useState(data);

  const toggleActive = (index) => {
    const newExtension = [...extension]
    newExtension[index].isActive = !newExtension[index].isActive;
    setExtension(newExtension)
  }

  const activeExtension = extension.filter((item) => {
    if (isActive === "All") return item;
    else if (isActive === "Active") {
      if (item.isActive === true) return item;
    } else if (isActive === "Inactive") {
      if (item.isActive === false) return item;
    } else return [];
  });
  // console.log("Extension");
  // console.log(extension);
  // console.log("active extension");
  // console.log(activeExtension);
  return (
    <>
        {/* {activeExtension.map((item) => (
            // <img src={img.logo} alt="hello" />
            <svg width="50" height="50" viewBox="0 0 100 100" xmlns={item.logo}></svg>
        ))} */}

      <div className="flex mt-6 p-2 flex-wrap justify-evenly gap-6 items-center gap-y-4 ">
        {activeExtension.map((item, index) => (
          <div className="bg-[hsl(225,23%,24%)] border-1 border-white opacity-80 flex-wrap flex flex-col justify-between w-full md:w-[30%] w-[40%]  rounded-lg py-4 px-4 h-[200px] flex-auto ">
            {/* upper div */}
            <div className="flex items-center gap-4 ">
              <div className="w-[20%]">
                <img src={tempLogo} alt="Card Logo Img" />
              </div>
              <div className="ml-auto">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="w-[80%] text-sm">
                  {item.description}
                </p>
              </div>
            </div>
            {/* down div */}
            <div className="flex justify-between items-center">
              <button
                className={`border-[0.15px] border-[hsl(0,0%,93%)] rounded-full py-2 px-4 cursor-pointer `}
              >
                Remove
              </button>

              {/* toggle btn */}
              <div
                onClick={() => toggleActive(index)}
                className={`w-12 h-6 flex items-center rounded-full bg-red cursor-pointer transition-all duration-300 ${
                  item.isActive ? "bg-orange-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                    item.isActive ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
