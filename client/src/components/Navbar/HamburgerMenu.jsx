import useAppContext from "../../hooks/useAppContext";


const HamburgerMenu = () => {
  const { showMenu, getMenu, changeLanguage } = useAppContext();

  const navButtons = changeLanguage ? ["Home", "About me", "Skills", "Experiences", "Contact"] : ["Home", "Acerca", "Skills", "Experiencias", "Contacto"];
  return (
    <div className={`bg-[#23263a] h-[829px] relative ${showMenu ? "left-0" : "-left-[1000px]"} transition-all ease-in duration-500 notebook:hidden`}>
      <div className="flex justify-center items-center h-[85%]">
        <ul className="flex flex-col text-center gap-[50px] text-white font-lucio text-xl w-screen">
          {navButtons.map((item) => (
            <li key={item} className="active:bg-slate-300 active:text-black tablet:text-2xl transition-all ease-in duration-300 w-full">
              <a href={`#${item.toLowerCase()}`} onClick={() => getMenu()}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
