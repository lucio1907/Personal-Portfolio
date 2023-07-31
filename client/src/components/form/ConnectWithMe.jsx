import useAppContext from "../../hooks/useAppContext";
import Form from "./Form";
import { Waypoint } from "react-waypoint";

const ConnectWithMe = () => {
  const { changeLanguage, handleWaypointToLeft, handleWaypointTitles } = useAppContext();
  return (
    <div
      id={changeLanguage ? "contact" : "contacto"}
      className="bg-[#23263a] h-full notebook:h-[500px] flex flex-col items-center justify-center pl-8 pr-8 pb-2 notebook:pb-6"
    >
      <div className="mt-10 h-full tablet:w-[70%]">
        <Waypoint
          onEnter={() => handleWaypointTitles(".title-form-animation")}
        />
        <h2 className="font-title font-bold text-[#ff4a57] text-2xl tablet:text-3xl notebook:text-5xl opacity-0 relative bottom-4 mt-10 title-form-animation notebook:relative notebook:top-[70px]">
          {changeLanguage ? "Connect with me" : "Conecta conmigo"}
        </h2>

        <Waypoint onEnter={() => handleWaypointToLeft(".form-animation")} />
        <Form />
      </div>
    </div>
  );
};

export default ConnectWithMe;
