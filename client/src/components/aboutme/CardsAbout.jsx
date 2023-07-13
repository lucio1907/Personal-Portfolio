const CardsAbout = ({ image, alt, url }) => {
  return (
    <div className="flex">
      <img className="w-[50px] h-[50px] tablet:w-[60px] tablet:h-[60px] notebook:w-[70px] notebook:h-[70px] mt-5 ml-5" src={image} alt={alt} />
      <a href={url} target="_blank">
        <p className="mt-[34px] notebook:mt-[40px] ml-5 font-paragraph text-white text-sm tablet:text-lg notebook:text-xl hover:text-slate-400 transition-all ease-in duration-100">
          {url.replace(/^(https?:\/\/)?(www\.)?/, "")}
        </p>
      </a>
    </div>
  );
};

export default CardsAbout;
