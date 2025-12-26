const WhatsAppButton = () => {
  const phoneNumber = "+917302821607";
  const message = "I am looking for security service";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-3 py-3 rounded-full shadow-lg transition"
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.04 2C6.58 2 2.13 6.44 2.13 11.9c0 2.11.55 4.17 1.6 5.99L2 22l4.23-1.11a9.86 9.86 0 0 0 4.81 1.23h.01c5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.79 14.3c-.25.7-1.44 1.34-2 1.42-.52.08-1.2.12-1.94-.12-.45-.14-1.02-.33-1.76-.66-3.09-1.34-5.1-4.48-5.26-4.69-.15-.2-1.26-1.67-1.26-3.18s.79-2.26 1.07-2.57c.28-.31.62-.39.83-.39.21 0 .41 0 .6.01.19.01.44-.07.69.53.25.6.85 2.08.92 2.23.08.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.45.54-.15.15-.31.32-.13.63.18.31.8 1.31 1.71 2.12 1.18 1.05 2.18 1.38 2.5 1.53.31.15.5.13.69-.08.19-.21.79-.92 1-1.24.21-.31.42-.26.69-.16.27.1 1.71.81 2 1 .29.19.48.28.55.43.07.15.07.86-.18 1.56z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
