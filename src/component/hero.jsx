export default function HeroSection() {
  return (
    <>
      <section id="beranda" className="">
        <div className="container mx-auto ">
          <div className="flex mx-6 pt-16 flex-wrap">
            <div className=" w-full lg:w-1/2 md:w-1/2 mt-28  ">
              <h1 className="text-white lg:text-5xl md:text-3xl text-2xl ">
                Hii Saya Bayu Weda
              </h1>
              <h2 className="text-primary sm:text-sm lg:text-2xl md:text-base mt-1 bg-gradient-to-r from-blue-600 via-blue-300 to-white bg-clip-text text-transparent">
                Frontend Developer & UI Desainer
              </h2>
              <p className="text-white/60 pr-20 mt-2 font-light hidden lg:block  md:hidden lg:text-base">
                Selamat datang di portofolio web saya! Saya Bayu Weda, seorang
                front-end website developer dengan hasrat untuk menciptakan
                pengalaman web yang menarik dan responsif. Dengan keahlian dalam
                HTML, CSS, dan JavaScript,
              </p>
              <p className="text-white/60 pr-20 mt-2 font-light hidden  md:text-sm md:block lg:hidden">
                Selamat datang di portofolio web saya! Saya Bayu Weda, seorang
                front-end website developer
              </p>

              <div className="flex gap-9 items-center mt-8">
                <button className="bg-primary text-white px-4 py-2 text-sm rounded-sm">
                  Hubungi saya
                </button>
                <div className="flex h-7 gap-6">
                  <img src="/asset/instagram 1.png" alt="" />
                  <img src="/asset/linkedin 1.png" alt="" />
                  <img src="/asset/twitter 1.png" alt="" />
                </div>
              </div>

              <div className="hover:ring-2 ring-primary min-w-min inline-flex p-1 items-baseline gap-2 mt-2">
                <img src="/asset/download-icon.png" alt="" />
                <h1 className="text-white font-light cursor-pointer">
                  Unduh CV
                </h1>
              </div>
            </div>
            <div className=" w-full lg:w-1/2 md:w-1/2 sm:w-full  lg:mt-0 md:mx-auto">
              <div className="md:-ml-32  md:mb-11 lg:ml-0 lg:mb-0 sm:-ml-16">
                <Item
                  image="/asset/bootstrap.png"
                  newclass="z-10 mt-16 ml-32 -rotate-45 absolute animate-goyang"
                />
                <Item
                  image="/asset/nodejs.png"
                  newclass="z-20 mt-20 ml-64 absolute animate-naik"
                />
                <Item
                  image="/asset/javascript.png"
                  newclass="z-20 mt-16 ml-96 absolute rotate-45 animate-pulse"
                />
                <Item
                  image="/asset/figma.png"
                  newclass="z-20 mt-52 ml-36 absolute -rotate-12 animate-rightLeft"
                />
                <Item
                  image="/asset/css.png"
                  newclass="z-20 absolute mt-60 ml-96 rotate-12 animate-goyang"
                />
                <Item
                  image="/asset/html.png"
                  newclass="z-20 absolute mt-80 ml-60 animate-pulse"
                />
              </div>
              <img src="/asset/hero.png" alt="" className="z-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// eslint-disable-next-line no-unused-vars, react/prop-types
function Item({ image, newclass }) {
  return (
    <>
      <div
        className={`${newclass} size-14  md:size-20 lg:size-36 hidden lg:block md:block  `}
      >
        <img src={image} alt="" />
      </div>
    </>
  );
}
