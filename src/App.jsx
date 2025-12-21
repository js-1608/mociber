import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Nav";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ServiceDetail from "./pages/Service";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Partners from "./pages/Partners";
import ScrollToTop from "./components/ScrollToTop";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import WhitePapersPage from "./pages/Whitepaper";
import Videos from "./pages/Video";
import CaseStudies from "./pages/CaseStudies";
import EBooks from "./pages/EBooks";
import WebinarsPage from "./pages/Webinars";
import ReportsPage from "./pages/reports";
import Startup from "./industries/Startup";
import MociberCybersecurityPage from "./Services/Cybersecurity";
import GeopoliticalSecurityPage from "./solutions/Geopolitical";
import RiskManagementPage from "./Services/RiskManagement";
import DefenseAndGovernmentPage from "./Services/DefenseAndGovernment";
import RansomwarePage from "./Services/Ransomware";
import Compliance from "./Services/compliance";
import DataPrivacy from "./Services/DataPrivacy";
import ESG from "./Services/Esg";
import Talent from "./Services/Talent";
import SupplyChain from "./Services/SupplyChain";
import OtIot from "./Services/OtIot";
import Bfsi from "./industries/Bfsi";
import Fintech from "./industries/Fintech";
import Healthcare from "./industries/Healthcare";
import EnergyOilGas from "./industries/Energy";
import TelecomMedia from "./industries/Telecom";
import Manufacturing from "./industries/Manufacturing";
import SaaSPaaSIaaS from "./industries/SaaSPaaSIaaS";
import AerospaceDefense from "./industries/AerospaceDefense";
import Automotive from "./industries/Automotive";
import RetailEcommerce from "./industries/RetailEcommerce";
import GovernmentPublicSector from "./industries/GovernmentPublicSector";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <Router>
      <div className="overflow-hidden">

        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/whitepaper" element={<WhitePapersPage />} />
          <Route path="/videos" element={<Videos playlistId="" />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/ebooks" element={<EBooks />} />
          <Route path="/webinars" element={<WebinarsPage />} />
          <Route path="/reports" element={<ReportsPage />} />

          {/* industries */}
          {/* <Route path="/industries/startups" element={<Startup />} /> */}
          <Route path="/industries/startups" element={<Startup />} />
          <Route path="/industries/Bfsi" element={<Bfsi />} />
          <Route path="/industries/fintech" element={<Fintech />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/energy" element={<EnergyOilGas />} />
          <Route path="/industries/telecom" element={<TelecomMedia />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/tech" element={<SaaSPaaSIaaS />} />
          <Route path="/industries/aerospace" element={<AerospaceDefense />} />
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route path="/industries/retail" element={<RetailEcommerce />} />
          <Route path="/industries/gov" element={<GovernmentPublicSector />} />
          


          {/* service */}
          <Route path="/services/cybersecurity" element={<MociberCybersecurityPage />} />
          <Route path="/services/risk-management" element={<RiskManagementPage />} />
          <Route path="/services/ai-defense" element={<DefenseAndGovernmentPage />} />
          <Route path="/services/ransomware" element={<RansomwarePage />} />
          <Route path="/services/compliance" element={<Compliance />} />
          <Route path="/services/data-privacy" element={<DataPrivacy />} />
          <Route path="/services/esg" element={<ESG />} />
          <Route path="/services/talent" element={<Talent />} />
          <Route path="/services/supply-chain" element={<SupplyChain />} />
          <Route path="/services/ot-iot" element={<OtIot />} />


          {/* solutions */}
          <Route path="/solutions/geopolitical" element={<GeopoliticalSecurityPage />} />


          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1 className="text-white">Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
