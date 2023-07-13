import useAppContext from "../../hooks/useAppContext";

const NavbarDesktop = () => {
    const { changeLanguage } = useAppContext();
    const navButtons = changeLanguage ? ["Home", "About me", "Skills", "Experiences", "Contact"] : ["Home", "Acerca", "Skills", "Experiencias", "Contacto"];
    return (
        <div className="hidden notebook:flex w-full">
            <div className="flex w-full">
                <ul className="w-full flex justify-end items-center gap-10 mr-10">
                    {navButtons.map(item => (
                        <li key={item} className="text-white font-paragraph hover:text-slate-400 transition-all ease-in duration-100">
                        <a href={`#${item.toLowerCase()}`}>{item}</a>
                      </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavbarDesktop;