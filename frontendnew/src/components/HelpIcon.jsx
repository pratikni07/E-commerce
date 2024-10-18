import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Instagram } from "lucide-react";

const HelpIcon = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-[#8E3E63] hover:bg-[#8E3E63]-200 max-sm:mb-20 text-white rounded-full p-3 shadow-lg transition duration-300 ease-in-out"
        onClick={() => {
          // Add your help functionality here
          alert("Help functionality goes here");
        }}
      >
        {/* <FontAwesomeIcon icon={faQuestionCircle} size="lg" /> */}
        <div className="flex gap-2">
          <Instagram />
          <p>MegaMart</p>
        </div>
      </button>
    </div>
  );
};

export default HelpIcon;
