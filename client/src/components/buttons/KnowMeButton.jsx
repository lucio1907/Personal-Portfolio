import useAppContext from "../../hooks/useAppContext";

const KnowMeButton = () => {
  const { changeLanguage } = useAppContext();
  return (
    <a
      href={changeLanguage ? "#about" : "#acerca"}
      className="mt-5 bg-[#ff4a57] p-2 w-[150px] text-center font-lucio font-semibold text-white tracking-wide"
    >
      {changeLanguage ? "Know me" : "Conoceme"}
    </a>
  );
};

export default KnowMeButton;
