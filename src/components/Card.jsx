import React, { useState } from "react";
import data from "../data.json";

// Import all images
import logoDevlens from "../assets/images/logo-devlens.svg";
import logoStyleSpy from "../assets/images/logo-style-spy.svg";
import logoSpeedBoost from "../assets/images/logo-speed-boost.svg";
import logoJsonWizard from "../assets/images/logo-json-wizard.svg";
import logoTabMaster from "../assets/images/logo-tab-master-pro.svg";
import logoViewportBuddy from "../assets/images/logo-viewport-buddy.svg";
import logoMarkupNotes from "../assets/images/logo-markup-notes.svg";
import logoGridGuides from "../assets/images/logo-grid-guides.svg";
import logoPalettePicker from "../assets/images/logo-palette-picker.svg";
import logoLinkChecker from "../assets/images/logo-link-checker.svg";
import logoDomSnapshot from "../assets/images/logo-dom-snapshot.svg";
import logoConsolePlus from "../assets/images/logo-console-plus.svg";

const logos = {
  "logo-devlens": logoDevlens,
  "logo-style-spy": logoStyleSpy,
  "logo-speed-boost": logoSpeedBoost,
  "logo-json-wizard": logoJsonWizard,
  "logo-tab-master-pro": logoTabMaster,
  "logo-viewport-buddy": logoViewportBuddy,
  "logo-markup-notes": logoMarkupNotes,
  "logo-grid-guides": logoGridGuides,
  "logo-palette-picker": logoPalettePicker,
  "logo-link-checker": logoLinkChecker,
  "logo-dom-snapshot": logoDomSnapshot,
  "logo-console-plus": logoConsolePlus
};

function Card({ isActive }) {
  const [extensions, setExtensions] = useState(data);

  // Toggle active status
  const toggleActive = (index) => {
    const newExtensions = [...extensions];
    newExtensions[index].isActive = !newExtensions[index].isActive;
    setExtensions(newExtensions);
  };

  // Filter based on isActive prop
  const activeExtensions = extensions.filter((item) => {
    if (isActive === "All") return true;
    if (isActive === "Active") return item.isActive === true;
    if (isActive === "Inactive") return item.isActive === false;
    return false;
  });

  return (
    <div className="flex mt-6 p-2 flex-wrap justify-evenly gap-6 items-center gap-y-4">
      {activeExtensions.map((item, index) => (
        <div
          key={index}
          className="bg-[hsl(225,23%,24%)] border-1 border-white opacity-80 flex-wrap flex flex-col justify-between w-full md:w-[30%] w-[40%] rounded-lg py-4 px-4 h-[200px] flex-auto"
        >
          {/* upper div */}
          <div className="flex items-center gap-4">
            <div className="w-[20%]">
              <img src={logos[item.logo]} alt={item.name} />
            </div>
            <div className="ml-auto">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="w-[80%] text-sm">{item.description}</p>
            </div>
          </div>

          {/* down div */}
          <div className="flex justify-between items-center">
            <button className="border-[0.15px] border-[hsl(0,0%,93%)] rounded-full py-2 px-4 cursor-pointer">
              Remove
            </button>

            {/* toggle btn */}
            <div
              onClick={() => toggleActive(index)}
              className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
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
  );
}

export default Card;
