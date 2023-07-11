import SkillWindow from "./SkillWindow";
import { Waypoint } from "react-waypoint";
import useAppContext from "../../hooks/useAppContext";
import { useEffect, useState } from "react";

const SkillSet = () => {
  const { handleWaypointToRight, handleWaypointTitles } = useAppContext();

  const [getResponse, setGetResponse] = useState([]);

  const getApi = async () => {
    const response = await fetch("https://personal-portfoliolucio.up.railway.app/skills");
    const data = await response.json();
    setGetResponse(data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div id="skills" className="bg-[#23263a] h-full flex flex-col items-center">
      <div className="mb-10 mt-10 flex flex-col w-full p-5 animation-title opacity-0 relative bottom-4">
        <p className="text-white font-lucio font-semibold">Services</p>
        <p className="font-title font-bold text-[#ff4a57] text-3xl">
          <span className="underline underline-offset-[15px]">Skill</span>-Set
        </p>
      </div>
      <Waypoint onEnter={() => handleWaypointTitles(".animation-title")} />

      {getResponse.map((item) => (
        <div key={item._id}>
          <Waypoint onEnter={() => handleWaypointToRight(`.window-animation-${item.title.replace(/\s/g, "")}`)}/> 
          <div className={`window-animation-${item.title.replace(/\s/g, "")} relative -left-[1000px] flex justify-center`}>
            <SkillWindow
              title={item.title}
              paragraphES={item.paragraphES}
              paragraphEN={item.paragraphEN}
              img={item.imgLink}
            />           
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSet;
