import GithubWindow from "./GithubWindow";
import SkillWindow from "./SkillWindow";
import { Waypoint } from "react-waypoint";
import useAppContext from "../../hooks/useAppContext";

const SkillSet = () => {
  const { handleWaypointToLeft, handleWaypointToRight, handleWaypointTitles } = useAppContext();

  return (
    <div id="skills" className="bg-[#23263a] h-full flex flex-col items-center">
      <div className="mb-10 flex flex-col w-full p-5 animation-title opacity-0 relative bottom-4">
        <p className="text-white font-lucio font-semibold">Services</p>
        <p className="font-title font-bold text-[#ff4a57] text-3xl">
          <span className="underline underline-offset-[15px]">Skill</span>-Set
        </p>
      </div>
      <Waypoint onEnter={() => handleWaypointTitles('.animation-title')}/>

      <div className="window-animation-html relative -left-[1000px] flex justify-center">
        <SkillWindow
          title={"HTML"}
          paragraphES={"HTML para el maquetado de sitios web"}
          paragraphEN={"HTML for web sites layout"}
          img={
            "https://res.cloudinary.com/dxtsx9ln9/image/upload/v1663646265/Skills/HTML_rwjnd2.png"
          }
        />
      </div>
      <Waypoint onEnter={() => handleWaypointToRight(".window-animation-html")}/>

      <div className="window-animation-css relative left-[1000px] flex justify-center">
        <SkillWindow
          title={'CSS'}
          paragraphES={'CSS para definir los estilos'}
          paragraphEN={'CSS to define the styles'}
          img={'https://res.cloudinary.com/dxtsx9ln9/image/upload/v1663646265/Skills/CSS_vh9tkx.png'}
        />
      </div>
      <Waypoint onEnter={() => handleWaypointToLeft('.window-animation-css')}/>

      <div className="window-animation-react relative -left-[1000px] flex justify-center">
        <SkillWindow
          title={"React JS"}
          paragraphES={"React JS para la creación de interfaces UI."}
          paragraphEN={"React JS for build UI interfaces."}
          img={
            "https://res.cloudinary.com/dxtsx9ln9/image/upload/v1663646266/Skills/react_dv1qlp.png"
          }
        />
      </div>
      <Waypoint onEnter={() => handleWaypointToRight(".window-animation-react")}/>

      <div className="window-animation-github relative left-[1000px] flex justify-center">
        <GithubWindow />
      </div>
      <Waypoint onEnter={() => handleWaypointToLeft(".window-animation-github")}/>

    </div>
  );
};

export default SkillSet;
