import { Waypoint } from "react-waypoint";
import useAppContext from "../../hooks/useAppContext";

const GoBackButton = () => {
  const { handleWaypointGoBack } = useAppContext();
  return (
    <>
      <div className="animation-button-GoBack flex justify-end mr-1 fixed bottom-[20px] right-[1000px] z-10">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 tablet:w-9"
            color="#ff4a57"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </a>
      </div>
      <Waypoint onEnter={() => handleWaypointGoBack(".animation-button-GoBack")}/>
    </>
  );
};

export default GoBackButton;
