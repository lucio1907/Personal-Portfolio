import useAppContext from "../../hooks/useAppContext";

const Footer = () => {
  const { changeLanguage } = useAppContext();
  return (
    <footer className="bg-[#11121d] h-[100px] notebook:h-[130px] flex flex-col justify-center items-center mt-10 w-full">
      <div className="p-2">
        <p className="text-[#4a4c5d] font-paragraph text-xs text-center tablet:text-base notebook:text-lg">
          {changeLanguage
            ? '"A good programmer is someone who always seeks a more efficient way to do things." - Bill Gates'
            : '"Un buen programador es alguien que siempre busca una forma más eficiente de hacer las cosas". - Bill Gates'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
