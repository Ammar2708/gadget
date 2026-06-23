const FurtherServices = ({ text, alt = "Additional repair services" }) => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto flex max-w-[1920px] flex-col px-6 py-14 sm:px-10 sm:py-16 md:min-h-[520px] md:flex-row md:items-center lg:block lg:h-[46vw] lg:min-h-[620px] lg:max-h-[820px] lg:px-0 lg:py-0">
        <div className="relative z-10 max-w-[720px] md:w-[52%] lg:absolute lg:left-[4.35vw] lg:top-[39%] lg:w-auto lg:-translate-y-1/2">
          <h2 className="text-[34px] font-bold leading-tight sm:text-[42px] md:text-[40px] lg:text-[3vw]">
            Further Services
          </h2>
          <p className="mt-5 max-w-[760px] text-[17px] leading-relaxed text-[#2d3340] sm:text-[19px] md:text-[18px] lg:mt-[2.35vw] lg:text-[1.42vw] lg:leading-[1.55]">
            {text}
          </p>
        </div>
        <img
          src="/img13.png"
          alt={alt}
          className="pointer-events-none mt-10 w-full max-w-[560px] self-end md:absolute md:bottom-1/2 md:right-[-74px] md:mt-0 md:w-[50vw] md:max-w-[560px] md:translate-y-1/2 lg:bottom-[9%] lg:right-[1vw] lg:w-[44vw] lg:max-w-[850px] lg:translate-y-0"
        />
      </div>
    </section>
  );
};

export default FurtherServices;
