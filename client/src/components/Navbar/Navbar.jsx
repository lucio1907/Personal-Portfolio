import HamburgerButton from "./HamburgerButton"
import HamburgerMenu from "./HamburgerMenu"

const Navbar = () => {
  return (
    <nav className="bg-[#212336] w-full h-[100px]">
        <div className="flex items-center justify-start h-full">
            <HamburgerButton />
            <div className="flex items-center justify-center w-full">
             <p className="font-lucio font-bold text-white text-3xl tracking-wide">Lucio<span className="text-[#ff4a57]">GA.</span></p>
            </div>
        </div>
        <HamburgerMenu/>
    </nav>
  )
}

export default Navbar