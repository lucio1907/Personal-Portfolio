import useAppContext from "../../hooks/useAppContext";

const SkillWindow = ({ title, paragraphES, paragraphEN, img }) => {
  const { changeLanguage } = useAppContext();

  return (
    <div className="bg-[#2b2d41] rounded-lg p-5 w-[248px] h-[200px] tablet:w-[270px] tablet:h-[220px] notebook:w-[310px] notebook:h-[250px] flex flex-col items-center justify-center gap-2 mt-8 shadow-lg shadow-[#14172a] transition-all ease-in duration-150 notebook:hover:shadow-[#ff4a5619]">
      <img src={img} alt={title} className="h-[50px] w-[50px] tablet:h-[70px] tablet:w-[70px] notebook:h-[80px] notebook:w-[80px]" />
      <p className="text-white text-xl tablet:text-2xl font-paragraph font-semibold tracking-wide">
        {title}
      </p>
      <p className="text-white font-paragraph text-sm text-center notebook:text-base">
        {changeLanguage ? paragraphEN : paragraphES}
      </p>
    </div>
  );
};

export default SkillWindow;
