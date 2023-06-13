import useAppContext from "../../hooks/useAppContext";

const SkillWindow = ({ title, paragraphES, paragraphEN, img }) => {
  const { changeLanguage } = useAppContext();

  return (
    <div className="bg-[#2b2d41] p-5 w-[248px] h-[200px] flex flex-col items-center justify-center gap-2 mt-8 shadow-lg shadow-[#14172a]">
      <img src={img} alt={title} className="h-[50px]" />
      <p className="text-white text-xl font-paragraph font-semibold tracking-wide">
        {title}
      </p>
      <p className="text-white font-paragraph text-sm text-center">
        {changeLanguage ? paragraphEN : paragraphES}
      </p>
    </div>
  );
};

export default SkillWindow;
