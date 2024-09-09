import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import TermsofService from "../Pages/TermsofService";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import ReturnRefundPolicy from "../Pages/ReturnRefundPolicy";

const IndexRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/termsOfService/*" element={<TermsofService />} />
      <Route path="/privacyPolicy/*" element={<PrivacyPolicy />} />
      <Route path="/returnRefundPolicy" element={<ReturnRefundPolicy />} />
      <Route path="*" element={<Navigate replace to="" />} />
    </Routes>
  );
};

export default IndexRoute;
