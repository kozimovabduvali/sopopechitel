import React from "react";
import Navbar from "../components/layout/Navbar";
import HeroBg from "../assets/images/hero-bg.png";
import Hero from "../components/Pages/Home/Hero";
import OurMission from "../components/Pages/Home/OurMission";
import OurGoal from "../components/Pages/Home/OurGoal";
import WhoWeHelp from "../components/Pages/Home/WhoWeHelp";
import HowWeHelp from "../components/Pages/Home/HowWeHelp";

function Home({ isDarkText }) {
  return (
    <>
      {/* Nav & Hero */}
      <div className="max-w-350 mx-auto px-4 pt-5">
        <div className="relative overflow-hidden rounded-3xl lg:rounded-[40px] pb-20 md:pb-25 lg:pb-20">
          <div className="relative z-10">
            {/* Nav */}
            <div className="lg:pl-2.5 pr-3 lg:pr-10">
              <Navbar />
            </div>
            {/* Hero */}
            <div className="mt-20 md:mt-18 lg:mt-25">
              <Hero />
            </div>
          </div>
          <img
            className="absolute top-0 right-0 z-0 size-full"
            src={HeroBg}
            alt="HeroBg"
          />
        </div>
      </div>
      {/* Main */}
      <main  className="max-w-330 mx-auto px-5">
        {/* Our Mission */}
        <section className="mt-20 lg:mt-25">
          <OurMission />
        </section>

        {/* Our goal */}
        <section className="mt-20 lg:mt-25">
          <OurGoal />
        </section>

        {/* Who we help */}
        <section className="mt-20 lg:mt-25">
          <WhoWeHelp />
        </section>

        {/* Who we help */}
        <section className="mt-20 lg:mt-25">
          <HowWeHelp />
        </section>
      </main>
    </>
  );
}

export default Home;
