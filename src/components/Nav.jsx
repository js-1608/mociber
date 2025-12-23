"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // keep Link; useNavigate optional

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null); // "services", "solutions", etc for desktop
  const [mobileActive, setMobileActive] = useState(null); // accordion on mobile

  // refs for outside-click detection
  const headerRef = useRef(null); // wraps the whole header
  const panelsRef = useRef(null); // contains desktop dropdown panels
  const mobileRef = useRef(null); // contains mobile menu DOM
  const mobileToggleRef = useRef(null); // mobile menu button
  const navButtonsRef = useRef(null); // desktop nav buttons container

  // helper toggles
  const toggleSection = (name) => setOpenSection(openSection === name ? null : name);
  const toggleMobile = (name) => setMobileActive(mobileActive === name ? null : name);

  // close everything
  const closeAll = () => {
    setOpenSection(null);
    setMobileActive(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      const target = e.target;

      // If a desktop panel is open and the click is outside panelsRef AND outside the nav buttons -> close desktop panel
      if (openSection) {
        const clickedInsidePanel = panelsRef.current && panelsRef.current.contains(target);
        const clickedNavButton = navButtonsRef.current && navButtonsRef.current.contains(target);
        if (!clickedInsidePanel && !clickedNavButton) {
          setOpenSection(null);
        }
      }

      // If mobile menu open and click outside mobile menu & outside toggle button -> close mobile menu
      if (mobileOpen) {
        const clickedInsideMobile = mobileRef.current && mobileRef.current.contains(target);
        const clickedMobileToggle = mobileToggleRef.current && mobileToggleRef.current.contains(target);
        if (!clickedInsideMobile && !clickedMobileToggle) {
          setMobileOpen(false);
          setMobileActive(null);
        }
      }
    }

    function handleEsc(e) {
      if (e.key === "Escape") closeAll();
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [openSection, mobileOpen, navButtonsRef, panelsRef, mobileRef, mobileToggleRef]);

  // Scroll to top handler for logo (also closes menus)
  const handleLogoClick = (e) => {
    // If you use react-router Link, the navigation will happen automatically.
    // We just make sure menus are closed and page scrolls to top.
    closeAll();
    // If on same route and want to force scroll:
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      ref={headerRef}
      className="w-full fixed top-0 left-0 z-50 border-b bg-linear-to-r from-[#010b1a] to-[#001836] shadow-lg backdrop-blur-md border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row: Brand + actions + mobile toggle */}
        <div className="flex items-center gap-6 p-2 justify-between">
          <div className="text-white  font-bold select-none">
            {/* onClick closes menus + scrolls up */}
            <Link to="/" onClick={handleLogoClick}>
              <img src="/logo.png" className="w-32" alt="Mociber logo" />
            </Link>
          </div>

          {/* Desktop primary nav (inline) */}
          <nav ref={navButtonsRef} className="hidden md:flex items-center gap-6 m-auto">
            <button
              onClick={() => toggleSection("services")}
              className="flex items-center gap-1 text-gray-300 hover:text-white font-medium focus:outline-none"
              aria-expanded={openSection === "services"}
              aria-controls="panel-services"
            >
              Services <ChevronDown size={14} />
            </button>

            <button
              onClick={() => toggleSection("solutions")}
              className="flex items-center gap-1 text-gray-300 hover:text-white font-medium focus:outline-none"
              aria-expanded={openSection === "solutions"}
              aria-controls="panel-solutions"
            >
              Solutions <ChevronDown size={14} />
            </button>

            <button
              onClick={() => toggleSection("platform")}
              className="flex items-center gap-1 text-gray-300 hover:text-white font-medium focus:outline-none"
              aria-expanded={openSection === "platform"}
              aria-controls="panel-platform"
            >
              Platform <ChevronDown size={14} />
            </button>

            <button
              onClick={() => toggleSection("industries")}
              className="flex items-center gap-1 text-gray-300 hover:text-white font-medium focus:outline-none"
              aria-expanded={openSection === "industries"}
              aria-controls="panel-industries"
            >
              Industries <ChevronDown size={14} />
            </button>

            <button
              onClick={() => toggleSection("resources")}
              className="flex items-center gap-1 text-gray-300 hover:text-white font-medium focus:outline-none"
              aria-expanded={openSection === "resources"}
              aria-controls="panel-resources"
            >
              Resources <ChevronDown size={14} />
            </button>

            <button
              onClick={() => toggleSection("company")}
              className="flex items-center gap-1 text-gray-300 hover:text-white font-medium focus:outline-none"
              aria-expanded={openSection === "company"}
              aria-controls="panel-company"
            >
              Company <ChevronDown size={14} />
            </button>
          </nav>

          <div>
            {/* Desktop actions */}
            <div className="cursor-pointer pointer hidden lg:flex">
              <Link
                to="/contact"
                onClick={closeAll}
                className="w-full bg-linear-to-r from-[#0040FF] to-[#001F5F] text-white font-semibold hover:opacity-90 rounded-lg px-4 py-[7px]"
              >
                Connect Now →
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              ref={mobileToggleRef}
              className="md:hidden text-gray-300"
              onClick={() => {
                setMobileOpen(!mobileOpen);
                // close desktop panels when mobile opens
                if (!mobileOpen) setOpenSection(null);
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Right-aligned sliding panels for desktop (prevent overflow) */}
      <div className="hidden md:block relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative" ref={panelsRef}>
            {/* Services panel */}
            {openSection === "services" && (
              <div
                id="panel-services"
                className="absolute left-0 w-full max-w-[900px] bg-linear-to-r from-[#00060f] to-[#001836] 
                  text-gray-200 shadow-2xl rounded-lg p-6 grid grid-cols-2 gap-6 border border-gray-800"
              >
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">
                    Core Offerings
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <Link to="/services/cybersecurity" onClick={closeAll} className="text-white font-medium block">
                        Cybersecurity
                      </Link>
                      <div className="text-xs text-gray-500">End-to-end protection across systems &amp; data</div>
                    </div>

                    <div>
                      <Link to="/services/risk-management" onClick={closeAll} className="text-white font-medium block">
                        Risk Management
                      </Link>
                      <div className="text-xs text-gray-500">Identify, assess &amp; mitigate business threats</div>
                    </div>

                    <div>
                      <Link to="/services/ai-defense" onClick={closeAll} className="text-white font-medium block">
                        AI-Powered Defense &amp; Governance
                      </Link>
                      <div className="text-xs text-gray-500">Adaptive security using AI-driven insights</div>
                    </div>

                    <div>
                      <Link to="/services/ransomware" onClick={closeAll} className="text-white font-medium block">
                        Ransomware &amp; Business Resilience
                      </Link>
                      <div className="text-xs text-gray-500">Maintain continuity during incidents</div>
                    </div>

                    <div>
                      <Link to="/services/compliance" onClick={closeAll} className="text-white font-medium block">
                        Compliance &amp; Auditing
                      </Link>
                      <div className="text-xs text-gray-500">Ensure global regulatory alignment</div>
                    </div>
                  </div>
                </div>

                <div className="pl-4 border-l border-gray-800">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">
                    Advanced Services
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <Link to="/services/data-privacy" onClick={closeAll} className="text-white font-medium block">
                        Data Privacy &amp; Protection
                      </Link>
                      <div className="text-xs text-gray-500">Safeguard sensitive information</div>
                    </div>

                    <div>
                      <Link to="/services/esg" onClick={closeAll} className="text-white font-medium block">
                        ESG Advisory
                      </Link>
                      <div className="text-xs text-gray-500">Cyber-sustainability &amp; governance advisory</div>
                    </div>

                    <div>
                      <Link to="/services/talent" onClick={closeAll} className="text-white font-medium block">
                        Niche Talent
                      </Link>
                      <div className="text-xs text-gray-500">Specialized security experts on demand</div>
                    </div>

                    <div>
                      <Link to="/services/supply-chain" onClick={closeAll} className="text-white font-medium block">
                        Supply Chain Security
                      </Link>
                      <div className="text-xs text-gray-500">Monitor dependencies for compromise</div>
                    </div>

                    <div>
                      <Link to="/services/ot-iot" onClick={closeAll} className="text-white font-medium block">
                        OT, IoT &amp; Edge Security
                      </Link>
                      <div className="text-xs text-gray-500">Secure devices at the edge</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Solutions panel */}
            {openSection === "solutions" && (
              <div
                id="panel-solutions"
                className="absolute left-0  w-full max-w-[900px] bg-linear-to-r from-[#010b1a] to-[#001836] text-gray-200 shadow-2xl rounded-lg p-6 grid grid-cols-2 gap-6 border border-gray-800"
              >
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">
                    Security Architecture
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <Link to="/solutions/geopolitical" onClick={closeAll} className="text-white font-medium block">
                        Geopolitical Risk &amp; Cyber Warfare
                      </Link>
                      <div className="text-xs text-gray-500">Strategic threat assessment</div>
                    </div>

                    <div>
                      <Link to="/solutions/zero-trust" onClick={closeAll} className="text-white font-medium block">
                        Zero Trust Security &amp; Architecture
                      </Link>
                      <div className="text-xs text-gray-500">Identity-first defense models</div>
                    </div>

                    <div>
                      <Link to="/solutions/ai-automation" onClick={closeAll} className="text-white font-medium block">
                        AI-Power Security &amp; Automation
                      </Link>
                      <div className="text-xs text-gray-500">Accelerate detection &amp; response</div>
                    </div>

                    <div>
                      <Link to="/solutions/cloud" onClick={closeAll} className="text-white font-medium block">
                        Cloud Computing &amp; Migration
                      </Link>
                      <div className="text-xs text-gray-500">Secure multi-cloud environments</div>
                    </div>

                    <div>
                      <Link to="/solutions/iam" onClick={closeAll} className="text-white font-medium block">
                        IAM, PAM &amp; Rights Management
                      </Link>
                      <div className="text-xs text-gray-500">Access control &amp; identity assurance</div>
                    </div>
                  </div>
                </div>

                <div className="pl-4 border-l border-gray-800">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">
                    Offensive &amp; Resilience
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <Link to="/solutions/devsecops" onClick={closeAll} className="text-white font-medium block">
                        DevSecOps, AIOps, MLOps
                      </Link>
                      <div className="text-xs text-gray-500">Integrate security into pipelines</div>
                    </div>

                    <div>
                      <Link to="/solutions/vuln-management" onClick={closeAll} className="text-white font-medium block">
                        Vulnerability Management &amp; Testing
                      </Link>
                      <div className="text-xs text-gray-500">Proactive exposure scanning</div>
                    </div>

                    <div>
                      <Link to="/solutions/red-team" onClick={closeAll} className="text-white font-medium block">
                        Red Teaming &amp; AI
                      </Link>
                      <div className="text-xs text-gray-500">Simulated adversarial campaigns</div>
                    </div>

                    <div>
                      <Link to="/solutions/software-integrity" onClick={closeAll} className="text-white font-medium block">
                        Software Integrity
                      </Link>
                      <div className="text-xs text-gray-500">Ensure code authenticity</div>
                    </div>

                    <div>
                      <Link to="/solutions/adversarial-ml" onClick={closeAll} className="text-white font-medium block">
                        Adversarial ML &amp; LLM Security
                      </Link>
                      <div className="text-xs text-gray-500">Secure AI models from attacks</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Platform panel */}
            {openSection === "platform" && (
              <div
                id="panel-platform"
                className="absolute left-16  w-full max-w-[700px] bg-linear-to-r from-[#010b1a] to-[#001836] text-gray-200 shadow-2xl rounded-lg p-6 border border-gray-800"
              >
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">AI Platforms</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Link to="/platforms/managed-security" onClick={closeAll} className="text-white font-medium block">
                      AI-Powered Managed Security
                    </Link>
                    <div className="text-xs text-gray-500">24/7 threat monitoring &amp; response</div>
                  </div>

                  <div>
                    <Link to="/platforms/vuln-management" onClick={closeAll} className="text-white font-medium block">
                      AI-Powered Vulnerability Management
                    </Link>
                    <div className="text-xs text-gray-500">Continuous AI-driven scanning</div>
                  </div>

                  <div>
                    <Link to="/platforms/grc" onClick={closeAll} className="text-white font-medium block">
                      GRC &amp; Auditing Platform
                    </Link>
                    <div className="text-xs text-gray-500">Governance &amp; compliance automation</div>
                  </div>

                  <div>
                    <Link to="/platforms/esg" onClick={closeAll} className="text-white font-medium block">
                      ESG &amp; Sustainability Management
                    </Link>
                    <div className="text-xs text-gray-500">Track environmental compliance</div>
                  </div>
                </div>
              </div>
            )}

            {/* Industries panel */}
            {openSection === "industries" && (
              <div
                id="panel-industries"
                className="absolute left-1/5 w-full max-w-[700px] bg-linear-to-r from-[#010b1a] to-[#001836] text-gray-200 shadow-2xl rounded-lg p-6 border border-gray-800"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Industries Served</h4>
                    <ul className="space-y-2">
                      <li><Link to="/industries/startups" onClick={closeAll} className="text-white">Startups</Link></li>
                      <li><Link to="/industries/bfsi" onClick={closeAll} className="text-white">BFSI</Link></li>
                      <li><Link to="/industries/fintech" onClick={closeAll} className="text-white">FinTech &amp; Payments</Link></li>
                      <li><Link to="/industries/healthcare" onClick={closeAll} className="text-white">Healthcare &amp; HealthTech</Link></li>
                      <li><Link to="/industries/energy" onClick={closeAll} className="text-white">Energy, Oil &amp; Gas</Link></li>
                      <li><Link to="/industries/telecom" onClick={closeAll} className="text-white">Telecommunications</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">More Sectors</h4>
                    <ul className="space-y-2">
                      <li><Link to="/industries/manufacturing" onClick={closeAll} className="text-white">Manufacturing</Link></li>
                      <li><Link to="/industries/tech" onClick={closeAll} className="text-white">Tech &amp; SaaS, PaaS, IaaS</Link></li>
                      <li><Link to="/industries/aerospace" onClick={closeAll} className="text-white">Aerospace &amp; Defense</Link></li>
                      <li><Link to="/industries/automotive" onClick={closeAll} className="text-white">Automotive</Link></li>
                      <li><Link to="/industries/retail" onClick={closeAll} className="text-white">Retail &amp; E-Commerce</Link></li>
                      <li><Link to="/industries/gov" onClick={closeAll} className="text-white">Government &amp; Public Sector</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Resources panel */}
            {openSection === "resources" && (
              <div
                id="panel-resources"
                className="absolute left-1/5 w-full max-w-[700px] bg-linear-to-r from-[#010b1a] to-[#001836] text-gray-200 shadow-2xl rounded-lg p-6 border border-gray-800"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Knowledge Base</h4>
                    <ul className="space-y-2">
                      <li><Link to="/blog" onClick={closeAll} className="text-white">Blog</Link></li>
                      <li><Link to="/case-studies" onClick={closeAll} className="text-white">Case Studies</Link></li>
                      <li><Link to="/videos" onClick={closeAll} className="text-white">Videos</Link></li>
                      <li><Link to="/whitepaper" onClick={closeAll} className="text-white">Whitepaper</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Reports &amp; Events</h4>
                    <ul className="space-y-2">
                      <li><Link to="/ebooks" onClick={closeAll} className="text-white">E-Books</Link></li>
                      <li><Link to="/reports" onClick={closeAll} className="text-white">Reports</Link></li>
                      <li><Link to="/webinars" onClick={closeAll} className="text-white">Webinar</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Company panel */}
            {openSection === "company" && (
              <div
                id="panel-company"
                className="absolute left-2/5 w-full max-w-[600px] bg-linear-to-r from-[#010b1a] to-[#001836] text-gray-200 shadow-2xl rounded-lg p-6 border border-gray-800"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">About Mociber</h4>
                    <ul className="space-y-2">
                      <li><Link to="/about" onClick={closeAll} className="text-white">About Us</Link></li>
                      <li><Link to="/partners" onClick={closeAll} className="text-white">Partners</Link></li>
                      {/* <li><Link to="/news" onClick={closeAll} className="text-white">News</Link></li> */}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Get Involved</h4>
                    <ul className="space-y-2">
                      {/* <li><Link to="/events" onClick={closeAll} className="text-white">Events</Link></li> */}
                      <li><Link to="/careers" onClick={closeAll} className="text-white">Career</Link></li>
                      <li><Link to="/contact" onClick={closeAll} className="text-white">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu (accordion) */}
      {mobileOpen && (
        <div ref={mobileRef} className="md:hidden bg-linear-to-r from-[#010b1a] to-[#001836] text-gray-200 border-t border-gray-800">
          {/* ... mobile accordion content unchanged ... */}
          {/* SERVICES */}
          <div className="border-b border-gray-800">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
              onClick={() => toggleMobile("services")}
              aria-expanded={mobileActive === "services"}
            >
              Services
              <ChevronDown size={18} className={`transition-transform ${mobileActive === "services" ? "rotate-180" : ""}`} />
            </button>

            {mobileActive === "services" && (
              <div className="px-4 pb-4 bg-[#141418]">
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Core Offerings</h4>
                  <ul className="space-y-2">
                    <li><Link to="/services/cybersecurity" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Cybersecurity</Link></li>
                    <li><Link to="/services/risk-management" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Risk Management</Link></li>
                    <li><Link to="/services/ai-defense" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">AI-Powered Defense &amp; Governance</Link></li>
                    <li><Link to="/services/ransomware" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Ransomware &amp; Business Resilience</Link></li>
                    <li><Link to="/services/compliance" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Compliance &amp; Auditing</Link></li>
                  </ul>

                  <h4 className="text-sm font-semibold text-gray-400 uppercase mt-4 mb-2">Advanced Services</h4>
                  <ul className="space-y-2">
                    <li><Link to="/services/data-privacy" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Data Privacy &amp; Protection</Link></li>
                    <li><Link to="/services/esg" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">ESG Advisory</Link></li>
                    <li><Link to="/services/talent" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Niche Talent</Link></li>
                    <li><Link to="/services/supply-chain" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Supply Chain Security</Link></li>
                    <li><Link to="/services/ot-iot" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">OT, IoT &amp; Edge Security</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* SOLUTIONS */}
          <div className="border-b border-gray-800">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
              onClick={() => toggleMobile("solutions")}
              aria-expanded={mobileActive === "solutions"}
            >
              Solutions
              <ChevronDown size={18} className={`transition-transform ${mobileActive === "solutions" ? "rotate-180" : ""}`} />
            </button>

            {mobileActive === "solutions" && (
              <div className="px-4 pb-4 bg-[#141418]">
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Security Architecture</h4>
                  <ul className="space-y-2">
                    <li><Link to="/solutions/geopolitical" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Geopolitical Risk &amp; Cyber Warfare</Link></li>
                    <li><Link to="/solutions/zero-trust" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Zero Trust Security &amp; Architecture</Link></li>
                    <li><Link to="/solutions/ai-automation" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">AI-Power Security &amp; Automation</Link></li>
                    <li><Link to="/solutions/cloud" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Cloud Computing &amp; Migration</Link></li>
                    <li><Link to="/solutions/iam" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">IAM, PAM &amp; Rights Management</Link></li>
                  </ul>

                  <h4 className="text-sm font-semibold text-gray-400 uppercase mt-4 mb-2">Offensive &amp; Resilience</h4>
                  <ul className="space-y-2">
                    <li><Link to="/solutions/devsecops" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">DevSecOps, AIOps, MLOps</Link></li>
                    <li><Link to="/solutions/vuln-management" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Vulnerability Management &amp; Testing</Link></li>
                    <li><Link to="/solutions/red-team" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Red Teaming &amp; AI</Link></li>
                    <li><Link to="/solutions/software-integrity" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Software Integrity</Link></li>
                    <li><Link to="/solutions/adversarial-ml" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Adversarial ML &amp; LLM Security</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* PLATFORM */}
          <div className="border-b border-gray-800">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
              onClick={() => toggleMobile("platform")}
              aria-expanded={mobileActive === "platform"}
            >
              Platform
              <ChevronDown size={18} className={`transition-transform ${mobileActive === "platform" ? "rotate-180" : ""}`} />
            </button>

            {mobileActive === "platform" && (
              <div className="px-4 pb-4 bg-[#141418]">
                <ul className="space-y-2">
                  <li><Link to="/platforms/managed-security" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">AI-Powered Managed Security</Link></li>
                  <li><Link to="/platforms/vuln-management" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">AI-Powered Vulnerability Management</Link></li>
                  <li><Link to="/platforms/grc" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">GRC &amp; Auditing Platform</Link></li>
                  <li><Link to="/platforms/esg" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">ESG &amp; Sustainability Management</Link></li>
                </ul>
              </div>
            )}


          </div>
          {/* Industries */}
          <div className="border-b border-gray-800">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
              onClick={() => toggleMobile("Industries")}
              aria-expanded={mobileActive === "Industries"}
            >
              Industries
              <ChevronDown size={18} className={`transition-transform ${mobileActive === "Industries" ? "rotate-180" : ""}`} />
            </button>

            {mobileActive === "Industries" && (
              <div className="px-4 pb-4 bg-[#141418]">
                <ul className="space-y-2">
                  <li><Link to="/industries/manufacturing" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Manufacturing</Link></li>
                  <li><Link to="/industries/tech" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Tech &amp; SaaS, PaaS, IaaS</Link></li>
                  <li><Link to="/industries/aerospace" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Aerospace &amp; Defense</Link></li>
                  <li><Link to="/industries/automotive" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Automotive</Link></li>
                  <li><Link to="/industries/retail" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Retail &amp; E-Commerce</Link></li>
                  <li><Link to="/industries/gov" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Government &amp; Public Sector</Link></li>
                </ul>
              </div>
            )}


          </div>

          {/* Resources */}
          <div className="border-b border-gray-800">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
              onClick={() => toggleMobile("Resources")}
              aria-expanded={mobileActive === "Resources"}
            >
              Resources
              <ChevronDown size={18} className={`transition-transform ${mobileActive === "Resources" ? "rotate-180" : ""}`} />
            </button>

            {mobileActive === "Resources" && (
              <div className="px-4 pb-4 bg-[#141418]">
                <ul className="space-y-2">

                  <li><Link to="/Resources/managed-security" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Blog</Link></li>
                  <li><Link to="/Resources/vuln-management" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Case Studies</Link></li>
                  <li><Link to="/Resources/grc" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Videos</Link></li>
                  <li><Link to="/Resources/esg" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Whitepape</Link></li>
                  <li><Link to="/Resources/vuln-management" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">E-Books</Link></li>
                  <li><Link to="/Resources/grc" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Reports</Link></li>
                  <li><Link to="/Resources/esg" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Webinar</Link></li>
                </ul>
              </div>
            )}


          </div>
          {/* Company */}
          <div className="border-b border-gray-800">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
              onClick={() => toggleMobile("Company")}
              aria-expanded={mobileActive === "Company"}
            >
              Company
              <ChevronDown size={18} className={`transition-transform ${mobileActive === "Company" ? "rotate-180" : ""}`} />
            </button>

            {mobileActive === "Company" && (
              <div className="px-4 pb-4 bg-[#141418]">
                <ul className="space-y-2">
                  <li><Link to="/about" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">About Us</Link></li>
                  <li><Link to="/partners" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Partners</Link></li>
                  {/* <li><Link to="/News" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">News</Link></li>
                  <li><Link to="/events" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Events</Link></li> */}
                  <li><Link to="/careers" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Career</Link></li>
                  <li><Link to="/contact" onClick={closeAll} className="text-sm text-gray-300 pl-2 block">Contact Us</Link></li>
                </ul>
              </div>
            )}


          </div>
          {/* Paste your mobile blocks (services, solutions, platform, industries, resources, company) here */}
          <div className="px-4 py-4 flex flex-col space-y-2">
            <Link to="/contact" onClick={closeAll} className="border border-gray-700 text-gray-300 py-2 rounded-md text-center p-2 bg-linear-to-r from-[#010b1a] to-[#001836]">Connect Now</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
