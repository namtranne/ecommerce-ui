export const HomepageHero = () => {
  return (
    <section className="bg-g5-grey dark:bg-g5-grey py-10 flex items-center">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-g5-black">
            Welcome to G5Tech
          </h1>
          <p className="max-w-2xl mb-6 font-light text-g5-black  lg:mb-8 md:text-lg lg:text-2xl">
            We are a dropshipping vendor
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
