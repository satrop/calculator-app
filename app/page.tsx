"use client";

import { useEffect } from 'react';
import Calculator from "../components/Calculator";

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/theme-loader.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      <Calculator />
    </main>
  );
}
