import Layout from "../Component/Layout";
import ConsultationCard from "../Component/ConsultationCard";
import TodayHoroscope from "../images/horoscopeImg/today_horoscope.png";
import Compatibility from "../images/horoscopeImg/compatibility.png";
import KundliMatching from "../images/horoscopeImg/kundli_matching.png";
import Kundli from "../images/horoscopeImg/Kundli.png";
import {
  todayHoroscope,
  compatibility,
  kundliText,
  kundliTextMatching,
} from "../utils/contentConsult";
import MoreAboutUs from "../Component/MoreAboutUs";
import { HeroTextComponent } from "../Component/HeroTextComponent";
import PanditCard from "../Component/PanditCard";
import Pujari1 from "../images/panditImg/poojari_1.png";
import Pujari2 from "../images/panditImg/poojari_2.png";
import Pujari3 from "../images/panditImg/poojari_3.png";
import Pujari4 from "../images/panditImg/poojari_4.png";

const Home = () => {
  return (
    <Layout>
      <>
        <HeroTextComponent />
        <div id="features">
          <h2 className="text-3xl max-sm:text-xl text-center p-2 m-0 font-semibold">
            Complimentary Astrology Services
          </h2>
          <div className="flex flex-wrap justify-center gap-4 bg-white p-16 max-sm:p-16 max-sm:flex-col">
            <ConsultationCard
              image={TodayHoroscope}
              heading={"Today's Horoscope"}
              content={todayHoroscope}
              price={19}
            />
            <ConsultationCard
              image={Compatibility}
              heading={"Compatibility"}
              content={compatibility}
              price={12}
            />
            <ConsultationCard
              image={Kundli}
              heading={"Free Kundli"}
              content={kundliText}
              price={32}
            />
            <ConsultationCard
              image={KundliMatching}
              heading={"Kundli Matching"}
              content={kundliTextMatching}
              price={6}
            />
          </div>
        </div>
        <div
          id="pandit"
          className=" bg-white border-[12px] border-page_background"
        >
          <div className="text-center px-2 py-4">
            <h2 className="text-black font-semibold text-3xl mb-4">
              Our Astrologers
            </h2>
            <p className="text-gray-600 font-semibold text-xl">
              1000+ Best Astrologers from India for Online Consultation
            </p>
          </div>
          <div className="flex justify-evenly items-center gap-2 px-6 mb-4 max-sm:flex-col ">
            <button className="bg-black text-white p-2 rounded-lg">
              &#8678; Prev{" "}
            </button>
            <div className="flex flex-wrap justify-between gap-4 p-4  max-sm:flex-col">
              <PanditCard
                image={Pujari1}
                name={"Guru Rajat"}
                title={"Astrologer"}
              />
              <PanditCard
                image={Pujari2}
                name={"Ashok chaturvaedi"}
                title={"Hand Reader"}
              />
              <PanditCard
                image={Pujari3}
                name={"Meena Gupta"}
                title={"Numerology"}
              />
              <PanditCard
                image={Pujari4}
                name={"Pandit HeeraLal"}
                title={"Love Life"}
              />
            </div>
            <button className="bg-black text-white p-2 rounded-lg">
              Next &#8680;
            </button>
          </div>
        </div>
        <div id="aboutUs" className="bg-page_background md:p-28 max-sm:p-8">
          <MoreAboutUs />
        </div>
      </>
    </Layout>
  );
};

export default Home;
