import React from 'react';

const WhatsAppButton: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=917736967999";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
      {/* You can replace this with a WhatsApp icon if available */}
      💬
    </a>
  );
};

export default WhatsAppButton;