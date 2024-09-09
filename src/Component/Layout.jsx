import PropTypes from "prop-types";

import { Footer } from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className=" h-screen font-poppins">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element,
};
