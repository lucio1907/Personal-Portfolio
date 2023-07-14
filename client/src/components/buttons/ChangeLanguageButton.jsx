import { useState } from "react";
import useAppContext from "../../hooks/useAppContext";

const ChangeLanguageButton = () => {
  const { getNewLanguage } = useAppContext();  
  const [buttonValue, setButtonValue] = useState("ESP");

  const handleClick = (e) => {
    if (e.type === "click" && buttonValue === "ESP") {
      setButtonValue("ENG");
      getNewLanguage(true);
    } else {
      setButtonValue("ESP");
      getNewLanguage(false);
    }
  };

  return (
    <button
      className="h-10 w-20 tablet:w-28 tablet:h-12 bg-[#ff4a57] rounded text-white font-lucio font-bold tablet:text-[18px] active:bg-[#f51e2c] transition-all ease-in duration-300 notebook:hover:bg-[#ff4a56c1] notebook:text-[#ffffffda]"
      onClick={handleClick}
    >
      {buttonValue}
    </button>
  );
};

export default ChangeLanguageButton;
