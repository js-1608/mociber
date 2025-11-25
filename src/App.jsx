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
          <Route path="/service" element={<ServiceDetail />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blog" element={<Blogs/>} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1 className="text-white">Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
