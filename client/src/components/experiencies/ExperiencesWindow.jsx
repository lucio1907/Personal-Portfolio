import useAppContext from "../../hooks/useAppContext";

const ExperienciesWindow = ({ getResponse }) => {
    const { changeLanguage } = useAppContext()
    return (
        <div>
            {getResponse.map(item => (
                <div key={item._id} className="window-animation-experience bg-[#2b2d41] p-5 w-[270px] h-full flex flex-col items-center justify-center gap-2 mt-8 shadow-lg shadow-[#14172a]">
                <img src={item.companyLogo} alt={item.title} className="h-[50px]" />
                <p className="text-white text-xl font-paragraph font-semibold tracking-wide">
                  {item.title}
                </p>
                <p className="text-white font-paragraph text-sm">
                  {changeLanguage ? item.workDescriptionEN : item.workDescriptionES}
                </p>
                <div className="flex flex-col items-start w-full gap-2 mt-2">
                    <p className="text-white font-paragraph text-sm">
                        {changeLanguage ? `Work Position: ${item.workPosition}` : `Posición: ${item.workPosition}`}
                    </p>
                    <p className="text-white font-paragraph text-sm">
                        {changeLanguage ? `Months: ${item.monthsQuantity}` : `Meses: ${item.monthsQuantity}`}
                    </p>
                </div>
              </div>
            ))}
        </div>
    )
}

export default ExperienciesWindow;