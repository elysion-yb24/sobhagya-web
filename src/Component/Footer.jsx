import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import contactUs from "../images/lotties/contactUs.json";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";
import gmail from "../images/gmail.png";
import twitter from "../images/twitter.png";

export const Footer = () => {
  return (
    <div id="contactUs">
      <footer className="footer p-10 md:px-28 bg-white text-primary flex flex-col gap-10 justify-between items-center">
        <div className="flex items-center max-sm:flex-col">
          <div className="md:w-1/2">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl text-primary font-bold mb-4">
                Let&apos;s get in touch
              </h2>
              <span className="text-lg max-sm:text-xl">
                Subscribe to stay in the loop on new product launches,
                promotions, and more.More details on company.
              </span>
              <span className="text-lg mb-4 max-sm:text-xl">
                Contact us to take the first step
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-bold text-lg">OFFICE</p>
                <p className="text-md">
                  F-10/9, Mandir Marg, Block-F, Opp.- Lovely Public School,
                  Krishna Nagar Delhi East Delhi DL 110051 IN.
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold text-lg">Email</p>
                <p className="text-md max-sm:text-xl">info@sobhagya.in</p>
              </div>
              <div className="mb-8">
                <p className="text-md max-sm:text-xl">Owned by-</p>
                <p className="font-bold text-lg">
                  Elysion Softwares Private Limited
                </p>
              </div>
              <div className="flex flex-col text-lg gap-2 font-bold">
                <Link to="/privacyPolicy">PRIVACY POLICY</Link>
                <Link to="/termsOfService">TERMS OF SERVICES</Link>
                <Link to="/returnRefundPolicy">RETURN AND REFUND POLICY</Link>
              </div>
              <div className="flex items-center gap-2">
                <a href="https://www.facebook.com/profile.php?id=61551098336719">
                  <img className="w-8" src={facebook} alt="facebook" />
                </a>
                <Link to="">
                  <img className="w-8" src={youtube} alt="youtube" />
                </Link>
                <Link href="mailto:info@baaten.in">
                  <img className="w-8" src={gmail} alt="gmail" />
                </Link>
                <Link to="">
                  <img className="w-10" src={twitter} alt="twitter" />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <Lottie
              animationData={contactUs}
              loop={true}
              className="object-contains aspect-auto w-full"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};
