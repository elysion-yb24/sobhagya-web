import Lottie from "lottie-react";
import aboutUs from "../images/lotties/aboutUs.json";

const MoreAboutUs = () => {
  return (
    <div className="flex max-sm:flex-col max-sm:gap-4 ">
      <div className="rounded-xl bg-white p-8 md:w-2/3">
        <h2 className=" flex text-5xl justify-center align-center font-bold text-primary mb-8">
          About Us
        </h2>
        <p className="text-md text-primary mb-2 max-sm:text-xl">
        Welcome to Sobhagya, your trusted astrology platform designed to provide personalized guidance and spiritual insights. At Sobhagya, we believe in the power of ancient wisdom to help navigate modern challenges. Our app connects you with experienced astrologers who can answer your questions, provide remedies, offer detailed horoscope readings, and guide you through the spiritual process of performing poojas.

Whether you're seeking solutions to life’s uncertainties, insights into your kundali, or remedies for personal issues, Sobhagya makes it easy to consult with astrologers in real time. Through our voice-based platform, users can communicate directly with astrologers, ask their queries, and receive tailored guidance, all from the comfort of their homes.

Join Sobhagya today and embark on your journey towards spiritual clarity, personal growth, and a deeper understanding of yourself and the universe
</p>
      </div>
      <div className="rounded-xl bg-primary p-8 md:w-2/3">
        <Lottie
          animationData={aboutUs}
          loop={true}
          className="object-contains aspect-auto w-full"
        />
      </div>
    </div>
  );
};

export default MoreAboutUs;
