"use client";

import * as React from "react";

export function WhatsAppChatBubble() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=917736967999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
    >
      💬
    </a>
  );
}
