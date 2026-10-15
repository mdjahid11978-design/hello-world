"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [message, setMessage] = useState("Hello, world!");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Hello, world!"));
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-5xl font-extrabold tracking-tight">{message}</h1>
      <p className="mt-4 text-gray-400 max-w-md">
        A fully upgraded Next.js + TypeScript + Tailwind starter, ready for Devin to build on.
      </p>
    </section>
  );
}
