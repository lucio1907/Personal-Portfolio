import useAppContext from "../../hooks/useAppContext";
import "../../styles/hamburgerButton.css";

const HamburgerButton = () => {
  const { showMenu, getMenu } = useAppContext();
  return (
    <div className="container absolute left-5 w-[10%] h-[20px] top-[4.6%]">
      <input
        className="label-check"
        id="label-check"
        type="checkbox"
        checked={showMenu ? true : false}
        readOnly
        onClick={() => getMenu()}
      />
      <label htmlFor="label-check" className="hamburger-label">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <label></label>
      </label>
    </div>
  );
};

export default HamburgerButton;
