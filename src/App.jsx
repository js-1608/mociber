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
import Compliance from "./Services/Compliance";
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
import AiMss from "./platforms/AiMss";
import CloudMigration from "./solutions/CloudMigration";
import ZeroTrustPage from "./solutions/zero-trust";
import AiAutomation from "./solutions/AiAutomation";
import IAM from "./solutions/IAM";
import Devsecops from "./solutions/Devsecops";
import VulnManagement from "./solutions/VulnManagement";
import RedTeam from "./solutions/RedTeam";
import SoftwareIntegrity from "./solutions/SoftwareIntegrity";
import AdversarialMl from "./solutions/AdversarialMl";
import Grc from "./platforms/Grc";
import VulnManagementPlatform from "./platforms/VulnManagementPlatform";
import ESGPlatform from "./platforms/ESGPlatform";
import WhatsAppButton from "./components/Whatsapp";
import PrivacyPolicy from "./pages/Policy";
import TermsAndConditions from "./pages/Terms&Condition";
import PlaylistVideos from "./pages/PlaylistVideos";
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

          <Route path="/videos" element={<PlaylistVideos />} />
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
          <Route path="/solutions/zero-trust" element={<ZeroTrustPage />} />
          <Route path="/solutions/ai-automation" element={<AiAutomation />} />
          <Route path="/solutions/cloud" element={<CloudMigration />} />
          <Route path="/solutions/iam" element={<IAM />} />
          <Route path="/solutions/devsecops" element={<Devsecops />} />
          <Route path="/solutions/vuln-management" element={<VulnManagement />} />
          <Route path="/solutions/red-team" element={<RedTeam />} />
          <Route path="/solutions/software-integrity" element={<SoftwareIntegrity />} />
          <Route path="/solutions/adversarial-ml" element={<AdversarialMl />} />


          {/* platforms */}
          <Route path="/platforms/managed-security" element={<AiMss />} />
          <Route path="/platforms/grc" element={<Grc />} />
          <Route path="/platforms/vuln-management" element={<VulnManagementPlatform />} />
          <Route path="/platforms/esg" element={<ESGPlatform />} />


          <Route path="/about" element={<About />} />

          {/* policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          <Route path="*" element={<h1 className="text-white">Page Not Found</h1>} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
