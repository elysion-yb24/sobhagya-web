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
          Baatein is a unique voice-based social app that brings people together
          and offers more than just connections. In addition to making friends
          and chatting with interesting voices, you can also connect with
          astrologers. Discover your kundali and get personalized horoscope
          readings, all through the power of your voice.
        </p>
        <p className="text-md text-primary mb-2 max-sm:text-xl">
          Join Baatein today and become part of a vibrant community of voice
          enthusiasts. Connect with astrologers, make friends, and explore the
          mysteries of your kundali and horoscope—all in one place, designed for
          the Gen Z generation. It&apos;s the ultimate app for voice-based
          social interactions and astrological insights.
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
