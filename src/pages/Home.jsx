import RevealBento from "../features/Home/Reveal-Bento/RevealBento";
import HomepageHero from "../features/Home/Hero/HomepageHero";
import Brands from "../features/Home/Brands/Brands";

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
    </div>
  );
}

export default Home;
