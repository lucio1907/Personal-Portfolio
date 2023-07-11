import { Waypoint } from "react-waypoint";
import useAppContext from "../../hooks/useAppContext";
import { useEffect, useState } from "react";
import ExperienciesWindow from "./ExperiencesWindow";

const Experiencies = () => {
    const { changeLanguage, handleWaypointTitles } = useAppContext();
    const [getResponse, setGetResponse] = useState([]);

    const getApi = async () => {
        const response = await fetch("https://personal-portfoliolucio.up.railway.app/experiencie")
        const data = await response.json()
        setGetResponse(data)
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <div id={changeLanguage ? 'experiences' : 'experiencias'} className="bg-[#23263a] h-full flex flex-col items-center">
            <div className="mb-10 flex flex-col w-full p-5 animation-title-experiences opacity-0 relative bottom-4 mt-10">
                <p className="text-white font-lucio font-semibold">{changeLanguage ? 'Jobs' : 'Trabajos'}</p>
                <p className="font-title font-bold text-[#ff4a57] text-3xl">
                    <span className="underline underline-offset-[15px]">{changeLanguage ? 'Experiences' : 'Experiencias'}</span>
                </p>
            </div>
            <Waypoint onEnter={() => handleWaypointTitles('.animation-title-experiences')}/>

            <ExperienciesWindow getResponse={getResponse}/>
        </div>
    )
}

export default Experiencies;