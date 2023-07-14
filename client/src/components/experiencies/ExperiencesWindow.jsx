import useAppContext from "../../hooks/useAppContext";

const ExperienciesWindow = ({ getResponse }) => {
    const { changeLanguage } = useAppContext()
    return (
        <div className="flex flex-col notebook:flex-row notebook:gap-5 xl:gap-14">
            {getResponse.map(item => (
                <div key={item._id} className="window-animation-experience relative -left-[1000px] notebook:-left-[2000px] bg-[#2b2d41] p-5 w-[270px] tablet:w-[420px] notebook:w-[420px] notebook:h-[332px] h-full flex flex-col items-center justify-center gap-2 mt-8 shadow-lg shadow-[#14172a] rounded-lg notebook:hover:shadow-[#ff4a5619] transition-all ease-in duration-150">
                <img src={item.companyLogo} alt={item.title} className="h-[40px] w-[50px] tablet:h-[70px] tablet:w-[80px] notebook:h-[100px] notebook:w-[110px] rounded-[100%]" />
                <p className="text-white text-xl font-paragraph font-semibold tracking-wide tablet:text-2xl tablet:tracking-normal">
                  {item.title}
                </p>
                <p className="text-white font-paragraph text-sm tablet:text-base">
                  {changeLanguage ? item.workDescriptionEN : item.workDescriptionES}
                </p>
                <div className="flex flex-col items-start w-full gap-2 mt-2">
                    <p className="text-white font-paragraph text-sm tablet:text-base">
                        {changeLanguage ? `Work Position: ${item.workPosition}` : `Posición: ${item.workPosition}`}
                    </p>
                    <p className="text-white font-paragraph text-sm tablet:text-base">
                        {changeLanguage ? `Months: ${item.monthsQuantity}` : `Meses: ${item.monthsQuantity === 1 ? 'Working at the moment' : item.monthsQuantity}`}
                    </p>
                </div>
              </div>
            ))}
        </div>
    )
}

export default ExperienciesWindow;