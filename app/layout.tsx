import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculator app",
  description: "This calculator app will be a great test of your CSS and JS skills especially. If you're wanting to practice using Grid, this challenge will be perfect for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-spartan grid place-content-center min-h-screen`}
      >
         <div className="grid place-content-center p-4 lg:p-0">
          <ThemeProvider>
            <ThemeToggle />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
