import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WhatsAppChatBubble } from "@/components/WhatsAppChatBubble";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "@mantine/core/styles.css";
// ‼️ import carousel styles after core package styles
import "@mantine/carousel/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Sooraj Santhosh - Official Website",
  description:
    "Official portfolio website of professional singer Sooraj Santhosh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps} suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${ubuntu.variable} antialiased flex flex-col`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MantineProvider>
            <Navbar />
            {children}
            <WhatsAppChatBubble />
            <Footer />
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
