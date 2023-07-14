import useAppContext from "../../hooks/useAppContext"
import HamburgerButton from "./HamburgerButton"
import HamburgerMenu from "./HamburgerMenu"
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
  const { showMenu } = useAppContext();
  return (
    // Navbar mobile view
    <nav className={`bg-[#212336] w-full h-[100px] notebook:h-[120px] notebook:p-5 ${showMenu ? 'fixed z-[1]' : ''}`}>
        <div className="flex items-center justify-start h-full notebook:hidden">
            <HamburgerButton />
            <div className="flex items-center justify-center w-full">
             <p className="font-lucio font-bold text-white text-3xl tablet:text-4xl tracking-wide tablet:tracking-normal">Lucio<span className="text-[#ff4a57]">GA.</span></p>
            </div>
        </div>
        <HamburgerMenu/>
        
        {/* Navbar desktop view */}
        <div className="hidden notebook:flex justify-start h-full">
            <div className="flex items-center justify-start p-7 w-[22%]">
             <p className="font-lucio font-bold text-white text-3xl tablet:text-4xl tracking-wide tablet:tracking-normal xl:text-5xl">Lucio<span className="text-[#ff4a57]">GA.</span></p>
            </div>
            <NavbarDesktop />
        </div>
    </nav>
  )
}

export default Navbar