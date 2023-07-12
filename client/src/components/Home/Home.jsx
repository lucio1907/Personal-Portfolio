import useAppContext from "../../hooks/useAppContext";
import ChangeLanguageButton from "../buttons/ChangeLanguageButton";
import KnowMeButton from "../buttons/KnowMeButton";

const Home = () => {
    const { changeLanguage } = useAppContext();

    return(
        <div className="bg-[#23263a] h-[829px] w-full flex flex-col">
            <div className="p-3 mr-3 flex justify-end">
                <ChangeLanguageButton/>
            </div>

            <div className="flex flex-col justify-center items-center h-full w-full p-5">
                <p className="text-4xl text-center text-white font-lucio tablet:text-5xl p-5 activate">{ changeLanguage ? "Hello!, I'm Full Stack Developer " : "Hola!, soy Desarrollador Full Stack" }</p>
                <p className="text-[#4a4c5d] text-center font-lucio tablet:text-xl">{ changeLanguage ? 'Passionate of building applications and bring them to life using code.' : 'Apasionado en crear aplicaciones y traerlas a la vida utilizando código.' }</p>
                <KnowMeButton />
            </div>
        </div>
    )
}

export default Home;