import { createContext, useState } from "react";
import anime from "animejs";


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState(false);

  const getMenu = () => setShowMenu(!showMenu); 

  const getNewLanguage = (param) => setChangeLanguage(param);

  // Waypoints animation
  const handleWaypointToRight = (target) => {
    anime({
      targets: target,
      left: 0,
      duration: 2000,
      easing: "easeInOutExpo",
    });
  };

  const handleWaypointToLeft = (target) => {
    anime({
      targets: target,
      left: 0,
      duration: 2000,
      easing: "easeInOutExpo",
    });
  };

  const handleWaypointTitles = (target) => {
    anime({
      targets: target,
      translateY: 20,
      duration: 2000,
      easing: 'easeInOutExpo',
      opacity: 1
    })
  }

  return (
    <AppContext.Provider
      value={{
        showMenu,
        getMenu,
        changeLanguage,
        getNewLanguage,
        handleWaypointToLeft,
        handleWaypointToRight,
        handleWaypointTitles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
