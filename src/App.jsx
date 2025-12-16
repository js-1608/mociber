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
          <Route path="/industries/startups" element={<ServiceDetail />} />

          {/* service */}
          <Route path="/services/cybersecurity" element={<MociberCybersecurityPage />} />
          <Route path="/services/risk-management" element={<RiskManagementPage />} />
          <Route path="/services/ai-defense" element={<DefenseAndGovernmentPage />} />




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
