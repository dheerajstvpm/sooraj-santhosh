import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WhatsAppChatBubble } from "@/components/WhatsAppChatBubble";
import { Navbar } from "@/components/Navbar";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Sooraj Santhosh - Official Website",
  description: "Official portfolio website of professional singer Sooraj Santhosh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ubuntu.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <WhatsAppChatBubble />
        </ThemeProvider>
      </body>
    </html>
  );
}
