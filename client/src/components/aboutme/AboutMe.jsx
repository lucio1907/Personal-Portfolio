import { Waypoint } from "react-waypoint";
import GoBackButton from "../buttons/GoBackButton";
import useAppContext from "../../hooks/useAppContext";
import CardsAbout from "./CardsAbout";
import CardGmail from "./CardGmail";
import AboutMeSpanish from "./AboutMeSpanish";
import AboutMeEnglish from "./AboutMeEnglish";

const AboutMe = () => {
  const { changeLanguage, handleWaypointTitles, handleWaypointToLeft } = useAppContext();
  return (
    <div
      id={changeLanguage ? "about" : "acerca"}
      className="bg-[#23263a] h-full flex flex-col"
    >
      <div className="mb-10 flex flex-col w-full p-5 animation-title-about opacity-0 relative bottom-4">
        <p className="text-white font-lucio font-semibold tablet:text-xl">
          {changeLanguage ? "About me" : "Acerca de mí"}
        </p>
        <p className="font-title font-bold text-[#ff4a57] text-3xl tablet:text-4xl">
          <span className="underline underline-offset-[15px]">
            {changeLanguage ? "Know" : "Conoceme"}
          </span>
          {changeLanguage ? "-me" : ""}
        </p>
      </div>
      <Waypoint
        onEnter={() => handleWaypointTitles(".animation-title-about")}
      />
      <GoBackButton />

      <Waypoint onEnter={() => handleWaypointToLeft('.about-section')}/>

      <div className=" relative -left-[1000px] about-section">
        {changeLanguage ? <AboutMeEnglish/> : <AboutMeSpanish/>}

        <CardsAbout
          image={"https://res.cloudinary.com/dxtsx9ln9/image/upload/v1686766714/Skills/github-mark-white_fqk8w5.png"}
          alt={"github-logo"}
          url={"https://github.com/lucio1907"}
        />

        <div>
          <p className="text-[#ff4a57] font-paragraph text-[17px] tablet:text-xl p-5 mt-5">
            { changeLanguage ? `Moreover here my socials:${""}` : `E aquí mis redes sociales:${" "}` }
          </p>
          <CardsAbout
            image={"https://res.cloudinary.com/dxtsx9ln9/image/upload/v1689026858/Redes%20sociales/pngwing.com_ar4lwz.png"}
            alt={"Linkedin-logo"}
            url={"https://www.linkedin.com/in/luciogastellu/"}
          />
          <CardsAbout 
            image={'https://res.cloudinary.com/dxtsx9ln9/image/upload/v1689027216/Redes%20sociales/pngwing.com_xiulnt.png'}
            alt={'Instagram-logo'}
            url={'https://www.instagram.com/luciogastellu/'}
          />
          <CardsAbout 
            image={'https://res.cloudinary.com/dxtsx9ln9/image/upload/v1689027298/Redes%20sociales/pngwing.com_1_uxyzvn.png'}
            alt={'Twitter-logo'}
            url={'https://twitter.com/Lu_Gastellu'}
          />
          <CardGmail 
            image={'https://res.cloudinary.com/dxtsx9ln9/image/upload/v1689026562/Redes%20sociales/pngwing.com_etm4fa.png'}
            alt={'Gmail-logo'}
            email={'luciogastellu.dev@gmail.com'}
          />
        </div>
      </div>
      
    </div>
  );
};

export default AboutMe;
