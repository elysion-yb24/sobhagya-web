import Logo from "../images/logo.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white shadow-xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-1 w-full relative lg:w-auto lg:static lg:flex lg:justify-start items-center">
            <img
              src={Logo}
              alt="Sobhagya-logo"
              className="object-contains aspect-auto h-12 cursor-pointer"
            />
            <p className="text-2xl text-black font-bold">Sobhagya</p>
          </div>
          <div>
            <ul className="flex flex-row w-full items-center justify-end gap-4 text-lg text-primary font-medium ">
              <li className="hover:bg-page_background p-1 rounded-md">
                <Link to="/">Home</Link>
              </li>
              <button className="bg-none hover:bg-page_background p-1 rounded-md cursor-pointer">
                <Link to="#features" smooth>
                  Features
                </Link>
              </button>
              <li className="hover:bg-page_background p-1 hover:rounded-md">
                <Link to="#aboutUs" smooth>
                  About
                </Link>
              </li>
              <li className="hover:bg-page_background p-1 hover:rounded-md">
                <Link to="#contactUs" smooth>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
