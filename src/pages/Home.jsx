import React from "react";
import RevealBento from "../features/Home/Reveal-Bento/RevealBento";
import HomepageHero from "../features/Home/Hero/HomepageHero";
import Brands from "../features/Home/Brands/Brands";
import AdBanner from "../features/Home/AdBanner";

function Home() {
  return (
    <div
      style={{
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <HomepageHero />
      <RevealBento />
      <Brands />

      {/* Left Side Ad Banner */}
      <AdBanner
        imageUrl="https://upload-os-bbs.hoyolab.com/upload/2024/06/03/154389499/93f12fd70c6597dca6dda729df38a678_930602290868031465.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70" 
        linkUrl="https://genshin.hoyoverse.com/en/home"
        position="left"
      />

      {/* Right Side Ad Banner */}
      <AdBanner
        imageUrl="https://i.redd.it/9ew7pgi0wryz.jpg"
        linkUrl="https://www.kaspersky.com/downloads"
        position="right"
      />
    </div>
  );
}

export default Home;
