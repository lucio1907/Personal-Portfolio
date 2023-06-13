import useAppContext from "../../hooks/useAppContext";

const HamburgerMenu = () => {
  const { showMenu, getMenu, changeLanguage } = useAppContext();

  const navButtons = changeLanguage ? ["Home", "Experiences", "About", "Skills", "Contact"] : ["Home", "Experiencias", "Acerca", "Skills", "Contacto"];

  return (
    <div className={`bg-[#23263a] h-[829px] relative ${showMenu ? "left-0" : "-left-[1000px]"} transition-all ease-in duration-500`}>
      <div className="flex justify-center items-center h-full">
        <ul className="flex flex-col text-center gap-[50px] text-white font-lucio text-xl w-screen">
          {navButtons.map((item) => (
            <li key={item} className="active:bg-slate-300 active:text-black transition-all ease-in duration-300 w-full">
              <a href={`#${item.toLowerCase()}`} onClick={() => getMenu()}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
