import ContactCta from "@/components/ContactCta";
import PartnersCarousel from "@/components/partners";
import Partner from "@/components/PartnersLogo";
import HeroBanner from "@/components/ServiceHero";
import { Blend, BookCheck, Eye, Globe, ScanQrCode } from "lucide-react";

export default function Partners() {
    return (
        <div className="w-full ">
            <HeroBanner
                image="/Banners/Partners.jpg"
                heading={<></>}
                subtext=""
                primaryCta=""
                secondaryCta=""
            />


            <section className="w-full bg-[#011f52] py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT TEXT BLOCK */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                            Together, We <span className="text-blue-600">Simplify the Future.</span>
                        </h2>

                        <p className="text-lg leading-relaxed">
                            Partnerships are at the heart of Mociber’s mission — to create a smarter, safer,
                            and more sustainable digital world. We collaborate with industry leaders, innovators,
                            and trusted advisors to deliver real impact through cybersecurity, business continuity,
                            digital transformation, and sustainability.
                        </p>
                    </div>

                    {/* RIGHT GRAPHIC / DESIGN */}
                    <div className="relative flex justify-center">
                        {/* <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl rotate-3"></div> */}
                        {/* <div className="absolute inset-0 m-auto w-60 h-60 md:w-80 md:h-80 bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl shadow-xl -rotate-3"></div> */}
                        <img src="/partners.jpg" alt="Partnership" className=" inset-0 m-full object-contain rounded-2xl border-2" data-aos="fade-up"/>
                    </div>  

                </div>
            </section>
            <Partner />


            {/* WHY PARTNER SECTION */}
            {/* <section className="py-20 px-6  text-center max-w-6xl m-auto text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Empowering Growth Through Collaboration
                </h2>
                <p className="mx-auto mb-8 text-lg">
                    At <strong>Mociber Global Technologies Private Limited</strong>, we view our partners as an extension of our mission — <em>Simplifying Everything</em>. Whether you’re a technology innovator, consulting firm, or channel provider, we co-create value, accelerate market expansion, and strengthen client trust.
                </p>
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto text-left ">
                    {[
                        "Trusted brand recognized for innovation and excellence.",
                        "Deep expertise across cybersecurity, business continuity, digital transformation, and sustainability.",
                        "Transparent engagement and shared success model.",
                        "Global reach with strong regional presence.",
                        "Led by visionary leadership, awarded '40 Under 40' in Cybersecurity & Digital Transformation.",
                    ].map((item, index) => (
                        <li key={index} className=" p-6 rounded-2xl shadow bg-[#0000ff13] text-sm">
                            {item}
                        </li>
                    ))}
                </ul>
            </section> */}



            <PartnerSection />
            <PartnersCarousel />

            <ContactCta />



        </div>
    );
}



const FeatureItem = ({ icon, title, description }) => {
    return (
        <div className="flex items-start gap-4 py-5">
            <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white">
                    {icon ? icon : <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </div>
            </div>

            <div className="flex-1">
                <div className="text-sm font-semibold text-white">{title}</div>
                {description && <div className="text-sm text-blue-900 mt-1">{description}</div>}
            </div>
        </div>
    );
};




const PartnerSection = () => {
    // change email/cta link here
    const handleCTA = () => {
        // example: mailto or redirect to partner signup
        window.location.href = "mailto:info@mociber.com?subject=Partner%20Inquiry";
    };

    return (
        <section className="">
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Top hero */}
                <div className="text-center mb-10">
                    <div className="inline-block px-3 py-1 rounded-full border text-white text-xs font-semibold mb-4">
                        PARTNERSHIP PERKS
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                        A win-win for you and your clients
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto ">
                        When you refer clients to Mociber through our partner program, you'll both benefit.
                    </p>
                </div>

                {/* Two bordered boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="border-2 border-green-300 rounded-lg p-6">
                        <h3 className="text-sm font-semibold text-white mb-3">GREAT FOR YOU...</h3>
                        <ul className=" space-y-3 text-white">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">●</span>
                                <span>Generous revenue share on every referral for as long as you're an active partner</span>
                            </li>
                            <li className="flex items-start gap-3 ">
                                <span className="text-blue-600 mt-1">●</span>
                                <span>Take advantage of the many perks that are exclusive to Mociber partners</span>
                            </li>
                        </ul>
                    </div>

                    <div className="border-2 border-green-300 rounded-lg p-6">
                        <h3 className="text-sm font-semibold text-white mb-3">...AND FOR YOUR CLIENTS</h3>
                        <ul className="space-y-3 text-white">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">●</span>
                                <span>Level up the way they collect and display reviews</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">●</span>
                                <span>Take advantage of the many perks that are exclusive to Mociber partners</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA centered */}
                <div className="flex justify-center mb-10">
                    <button
                        onClick={handleCTA}
                        className="border text-white px-6 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-400 transition"
                    >
                        Become a partner
                    </button>
                </div>

                {/* thin divider line */}
                <div className="border-t border-green-200" />

                {/* Bottom split: left headline, right features */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* LEFT */}
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full border text-white text-xs font-semibold mb-4">
                            WHAT'S INCLUDED
                        </div>

                        <h3 className="text-3xl font-extrabold text-white leading-tight">
                            WHY PARTNER WITH MOCIBER
                        </h3>

                        <p className="text-gray-300 mt-4 max-w-md">
                            Empowering Growth Through Collaboration
                            At Mociber Global Technologies Private Limited, we view our partners as an extension of our mission — Simplifying Everything. Whether you’re a technology innovator, consulting firm, or channel provider, we work hand-in-hand to co-create value, accelerate market expansion, and strengthen client trust.
                        </p>
                    </div>

                    {/* RIGHT: vertical list with separators */}
                    <div>
                        <div className="">
                            <div className="divide-y divide-green-100">
                                <div className="px-4">
                                    <FeatureItem
                                        title="Trusted brand recognized for innovation and excellence."
                                        description=""
                                        icon={
                                            <BookCheck />
                                        }
                                    />
                                </div>

                                <div className="px-4">
                                    <FeatureItem
                                        title="Deep expertise across cybersecurity, business continuity, digital transformation, and sustainability."
                                        description=""
                                        icon={
                                            <ScanQrCode />}
                                    />
                                </div>

                                <div className="px-4">
                                    <FeatureItem
                                        title="Transparent engagement and shared success model."
                                        description=""
                                        icon={
                                            <Blend />
                                        }
                                    />
                                </div>

                                <div className="px-4">
                                    <FeatureItem
                                        title="Global reach with strong regional presence."
                                        description=""
                                        icon={
                                            <Globe />}
                                    />
                                </div>
                                <div className="px-4">
                                    <FeatureItem
                                        title="Led by visionary leadership, awarded Entrepreneurs Today’s “40 Under 40” in Cybersecurity & Digital Transformation."
                                        description=""
                                        icon={
                                            <Eye />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};



