"use client";

import LadkeDetails from "../components/LadkeDetails";

export default function HeroSection() {
  return (
    <>
      {/* HERO TOP IMAGE */}
      <div className="relative z-20 w-full">
        <img
          src="/assets/hero_top.webp"
          alt="Hero"
          className="block w-full h-auto object-cover"
        />
      </div>

      {/* STICKY BACKGROUND SECTION */}
      <section className="relative w-full">
        <div
          className="sticky top-0 w-full min-h-screen -mb-[100vh] bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/family-bg_new.webp')",
            backgroundColor: "#faf4e8",
            backgroundSize: "100% 100%",
          }}
        />
        {/* SCROLLING CONTENT */}
        <div className="relative z-10 flex w-full flex-col items-center px-4 py-10 pb-28 sm:px-8 md:px-12 lg:px-16 mt-20 px-10">
          {/* GANESH */}
          <div className="mt-4 flex justify-center md:mt-8">
            <img
              src="/assets/ganes.png"
              alt="Shree Ganesh"
              className="w-[100px] sm:w-[120px] md:w-[150px]"
            />
          </div>

          {/* WEDDING LOGO */}
          <div className="mt-8 flex flex-col items-center text-center md:mt-10">
            <img
              src="/assets/logo.png"
              alt="Wedding Logo"
              className="w-[150px] sm:w-[220px] md:w-[280px]"
            />
          </div>

          <LadkeDetails />
        </div>
      </section>
    </>
  );
}
