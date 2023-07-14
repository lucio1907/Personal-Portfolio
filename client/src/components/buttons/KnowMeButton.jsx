import useAppContext from "../../hooks/useAppContext";

const KnowMeButton = () => {
  const { changeLanguage } = useAppContext();
  return (
    <a
      href={changeLanguage ? "#about" : "#acerca"}
      className="mt-5 bg-[#ff4a57] p-2 w-[150px] text-center font-lucio font-semibold text-white tracking-wide tablet:p-3 tablet:w-[200px] tablet:text-[19px] xl:text-[20px] xl:w-[240px] xl:mt-8 xl:p-4 notebook:hover:bg-[#ff4a56c1] notebook:text-[#ffffffda] transition-all ease-in duration-150"
    >
      {changeLanguage ? "Know me" : "Conoceme"}
    </a>
  );
};

export default KnowMeButton;
