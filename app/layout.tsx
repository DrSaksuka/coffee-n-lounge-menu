import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee!N Launge",
  description: "Coffee!N Lounge menu — Coffee & drinks",
  icons: {
    // add a version query to bust caches (update the number if you change the icon)
    icon: '/favicon.ico?v=2',
    shortcut: '/favicon-32x32.png?v=2',
    apple: '/apple-touch-icon.png?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Explicit favicon links to ensure browsers pick up generated files. */}
        {/* Cache-busting query string added: update `v=` when you update icons. */}
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="w-full mt-8 py-6 text-center text-site-beige text-sm">
          Tasarım sahibi&nbsp;
          <a
            href="https://salih-acar-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            Salih Acar
          </a>
        </footer>
      </body>
    </html>
  );
}
