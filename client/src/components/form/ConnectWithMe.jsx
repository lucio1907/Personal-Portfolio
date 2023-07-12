import useAppContext from "../../hooks/useAppContext";
import Form from "./Form";
import { Waypoint } from "react-waypoint";

const ConnectWithMe = () => {
  const { changeLanguage, handleWaypointToLeft, handleWaypointTitles } = useAppContext();
  return (
    <div
      id={changeLanguage ? "contact" : "contacto"}
      className="bg-[#23263a] h-full flex flex-col items-center"
    >
      <div className="mt-10 h-full tablet:w-[70%]">
        <Waypoint
          onEnter={() => handleWaypointTitles(".title-form-animation")}
        />
        <h2 className="font-title font-bold text-[#ff4a57] text-2xl tablet:text-3xl opacity-0 relative bottom-4 mt-10 title-form-animation">
          {changeLanguage ? "Connect with me" : "Conecta conmigo"}
        </h2>

        <Waypoint onEnter={() => handleWaypointToLeft(".form-animation")} />
        <Form />
      </div>
    </div>
  );
};

export default ConnectWithMe;
