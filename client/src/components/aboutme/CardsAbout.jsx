const CardsAbout = ({ image, alt, url }) => {
  return (
    <div className="flex">
      <img className="w-[50px] mt-5 ml-5" src={image} alt={alt} />
      <a href={url} target="_blank">
        <p className="mt-[34px] ml-5 font-paragraph text-white text-sm hover:text-slate-400 transition-all ease-in duration-100">
          {url.replace(/^(https?:\/\/)?(www\.)?/, "")}
        </p>
      </a>
    </div>
  );
};

export default CardsAbout;
