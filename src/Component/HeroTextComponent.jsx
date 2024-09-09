import AstrologyBg from "../images/astrology-bg.png";
import Sobhagya from "../images/logo.png";

export const HeroTextComponent = () => {
  const openPlayStoreLink = () => {
    const playStoreUrl = `https://play.google.com/store/apps/details?id=com.sobhagya.sobhagya&hl=en`;
    window.location.href = playStoreUrl;
  };

  return (
    <div className="flex md:h-[40rem] max-sm:h-[20rem] w-full justify-center flex-col items-center text-start ">
      <div className="flex flex-col items-start relative text-start justify-end  space-y-8 h-full">
        <img
          src={AstrologyBg}
          className="object-contain -z-50 opacity-90 h-full"
        />
        <div className="absolute top-[50%] left-[43%] max-sm:top-0">
          <button
            className=" flex items-center gap-1 bg-white text-black font-semibold p-4 rounded-full text-lg
          hover:bg-lightYellow text-center"
            onClick={openPlayStoreLink}
          >
            <img src={Sobhagya} alt="website logo" width={40} height={40} />
            Download now
          </button>
        </div>
      </div>
    </div>
  );
};
