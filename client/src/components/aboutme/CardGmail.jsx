const CardGmail = ({ image, alt, email }) => {
  return (
    <div className="flex">
      <img className="w-[40px] h-[30px] tablet:w-[50px] tablet:h-[40px] mt-5 ml-6" src={image} alt={alt} />
      <a href={`mailto:${email}`} target="_blank">
        <p className="mt-[26px] ml-7 font-paragraph text-white text-sm tablet:text-lg hover:text-slate-400 transition-all ease-in duration-100">
          {email}
        </p>
      </a>
    </div>
  );
};

export default CardGmail;
