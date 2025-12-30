import { useEffect, useState } from "react";

const languages = [
  { code: "en", label: "English ", flag: "🇬🇧" },
  { code: "ar", label: "Arabic", flag: "🇸🇦" },
  { code: "es", label: "Spanish", flag: "🇪🇸" },
  { code: "fr", label: "French", flag: "🇫🇷" },
  { code: "zh-CN", label: "Chinese", flag: "🇨🇳" },
  { code: "pt", label: "Portuguese", flag: "🇵🇹" },
  { code: "de", label: "German", flag: "🇩🇪" },
  { code: "nl", label: "Dutch", flag: "🇳🇱" },
];

export function Translate() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);

  useEffect(() => {
    if (window.google?.translate) return;

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  const changeLanguage = (lang) => {
    setCurrent(lang);
    setOpen(false);

    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      {/* Hidden Google Translate */}
      <div id="google_translate_element" className="hidden" />

      {/* Sticky Language Selector */}
      <div className="fixed bottom-5 left-5 z-[9999]">
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-white text-black border border-black/20 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition"
          >
            {/* <span className="text-lg">{current.flag}</span> */}
            <span className="text-sm font-medium">{current.label}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {open && (
            <div className="absolute bottom-full mb-2 right-0 bg-white border border-black/10 rounded-xl shadow-lg overflow-hidden">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang)}
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-black hover:bg-gray-100"
                >
                  {/* <span className="text-lg">{lang.flag}</span> */}
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
