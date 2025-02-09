"use client";

import { useEffect } from 'react';
import Calculator from "../components/Calculator";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/theme-loader.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      <div className="grid place-content-center p-4 lg:p-0">
        <ThemeToggle />
        <Calculator />
      </div>
    </main>
  );
}
