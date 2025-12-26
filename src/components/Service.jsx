import React from "react";
import { ArrowUpRight, Shield, Cloud, Lock, Laptop, Gem, ArrowRight, Vibrate, ShieldPlus, Codesandbox, DatabaseZap } from 'lucide-react';
import { Link } from "react-router-dom";
 const services = [
        {
            id: 1,
            title: 'Identity & Access Management',
            description: 'Manage human and non-human identity and privileged accesses',
            icon: Shield,
            gradient: 'from-blue-600 to-blue-800',
            bgPattern: 'identity',
            link:'/services/risk-management'
        },
        {
            id: 2,
            title: 'Cloud Security and Solutions',
            description: 'Secure your cloud environments and ensure safe migration with compliance-ready solutions.',
            icon: Cloud,
            gradient: 'from-slate-700 to-slate-900',
            bgPattern: 'cloud',
            link:'/services/cybersecurity'
        },
        {
            id: 3,
            title: 'Data Protection & Encryption',
            description: 'Keep sensitive information safe with advanced encryption and secure storage solutions.',
            icon: Lock,
            gradient: 'from-slate-700 to-slate-900',
            bgPattern: 'data',
            link:'/services/data-privacy'
        },
        {
            id: 4,
            title: 'Endpoint Security Management',
            description: 'Protect laptops, mobiles, and IoT devices with AI-powered endpoint defense solutions.',
            icon: Laptop,
            gradient: 'from-slate-700 to-slate-900',
            bgPattern: 'endpoint',
            link:'/services/ai-defense'
        }, {
            id: 5,
            title: 'Ransomware & Business Resilience',
            description: 'Turn disruption into resilience through intelligence and preparedness',
            icon: Vibrate,
            gradient: 'from-blue-600 to-blue-800',
            bgPattern: 'identity',
            link:'/services/ransomware'
        },
        {
            id: 6,
            title: 'Compliance & Auditing ',
            description: 'Ensures compliances and auditing of most complex processes, technologies and ERP systems',
            icon: ShieldPlus,
            gradient: 'from-slate-700 to-slate-900',
            bgPattern: 'cloud',
            link:'/services/compliance'
        },
        {
            id: 7,
            title: 'Niche Talent ',
            description: 'On-demand niche talent in emerging technologies consulting, implementation and auditing',
            icon: Codesandbox,
            gradient: 'from-slate-700 to-slate-900',
            bgPattern: 'data',
            link:'/services/talent'
        },
        {
            id: 8,
            title: 'ESG Advisory',
            description: 'brings data, technology, ethics and strategy together for sustainable transformation and resilience',
            icon: DatabaseZap,
            gradient: 'from-slate-700 to-slate-900',
            bgPattern: 'endpoint',
            link:'/services/esg'
        }
    ];

function Service() {
    return (
        <div className="w-full bg-linear-to-b from-[#000A1F] to-[#0c1b34] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                    {/* Left Side - Title */}
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4 border p-2 w-36 rounded-full">
                            <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                            <span className="text-gray-400 text-sm font-medium" >Our Services</span>
                        </div>
                        <h2 className="text-2xl md:text-5xl font-bold  text-white " data-aos="fade-up">
                            Protecting businesses with tailored cyber security services that fit
                        </h2>
                    </div>


                    {/* Right Side - Description & Button */}
                    <div className="max-w-md space-y-6">
                        <p className="text-gray-400 text-base leading-relaxed">
                            We provide customized cybersecurity services designed to match your business needs, whether you're a startup or an enterprise.
                        </p>
                        <Link to="/contact" className="w-[40%] bg-linear-to-r hidden lg:block from-[#0040FF] to-[#001F5F] text-white font-semibold hover:opacity-90 rounded-lg px-5 py-2">
                            Connect Now →
                        </Link>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link to={service.link} key={service.id} className="no-underline">
                            <div
                                key={service.id}
                                className="relative rounded-2xl p-6 overflow-hidden group cursor-pointer 
                                    transition-all duration-3000 hover:scale-105 
                                    bg-gradient-to-br from-slate-800 to-slate-900 
                                    hover:bg-[linear-gradient(90deg,#0022FB_0%,#0f2453_100%)]"
                                data-aos="fade-up"

                            >


                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    {service.bgPattern === 'identity' && (
                                        <div className="absolute bottom-0 right-0 w-48 h-48">
                                            <div className="absolute bottom-4 right-4 w-32 h-32 border-4 border-white/20 rounded-lg"></div>
                                            <div className="absolute bottom-8 right-8 w-24 h-24 border-4 border-white/20 rounded-lg"></div>
                                        </div>
                                    )}
                                    {service.bgPattern === 'cloud' && (
                                        <div className="absolute bottom-0 right-0 w-48 h-48">
                                            <svg className="w-full h-full opacity-30" viewBox="0 0 200 200">
                                                <rect x="40" y="80" width="60" height="80" stroke="white" strokeWidth="2" fill="none" />
                                                <rect x="50" y="90" width="40" height="60" stroke="white" strokeWidth="2" fill="none" />
                                                <rect x="100" y="100" width="50" height="60" stroke="white" strokeWidth="2" fill="none" />
                                            </svg>
                                        </div>
                                    )}
                                    {service.bgPattern === 'data' && (
                                        <div className="absolute bottom-0 right-0 w-48 h-48">
                                            <svg className="w-full h-full opacity-30" viewBox="0 0 200 200">
                                                <circle cx="150" cy="150" r="40" stroke="white" strokeWidth="2" fill="none" />
                                                <circle cx="150" cy="150" r="30" stroke="white" strokeWidth="2" fill="none" />
                                                <line x1="150" y1="110" x2="150" y2="130" stroke="white" strokeWidth="2" />
                                            </svg>
                                        </div>
                                    )}
                                    {service.bgPattern === 'endpoint' && (
                                        <div className="absolute bottom-0 right-0 w-48 h-48">
                                            <svg className="w-full h-full opacity-30" viewBox="0 0 200 200">
                                                <rect x="80" y="100" width="80" height="60" rx="4" stroke="white" strokeWidth="2" fill="none" />
                                                <circle cx="120" cy="130" r="15" stroke="white" strokeWidth="2" fill="none" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Header with Arrow */}
                                    <div className="flex items-start justify-between mb-6">
                                        <h3 className="text-xl font-bold text-white leading-tight pr-4">
                                            {service.title}
                                        </h3>
                                        <div className="bg-white rounded-full p-2 group-hover:bg-blue-100 transition-colors">
                                            <ArrowUpRight className="w-4 h-4 text-slate-900" />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    {/* Icon at Bottom */}
                                    <div className="mt-auto">
                                        <div className={`w-14 h-14 rounded-full flex items-center justify-center ${index === 0 ? 'bg-white' : 'bg-blue-600'
                                            }`}>
                                            <Icon className={`w-7 h-7 ${index === 0 ? 'text-blue-600' : 'text-white'
                                                }`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                {/* <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-3 text-gray-300">
                            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                Free
                            </span>
                            <span className="text-sm">
                                Protecting what matters most -{' '}
                                <a href="#" className="text-blue-500 hover:text-blue-400 underline transition-colors">
                                    See How Our Services Keep You Safe!
                                </a>
                            </span>
                        </div>
                    </div> */}
            </div>
        </div>
    );
}
export default Service;