import { Link, useSearchParams } from "react-router-dom";
import { modelFamilies } from "../data/repairDetails";

const ModelSelection = () => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug") || "ipad-pro";
  const family = modelFamilies[slug] || modelFamilies["ipad-pro"];
  const backLinks = {
    ipad: { label: "Back to iPad models", path: "/ipad repair" },
    mac: { label: "Back to Mac models", path: "/mac repair" },
    samsung: { label: "Back to Samsung models", path: "/samsung repairs" },
    ipod: { label: "Back to iPod models", path: "/ipod repair" },
  };
  const back = backLinks[family.category] || backLinks.ipad;

  return (
    <div className="bg-white text-[#171a23]">
      <section
        className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/imgi_8_about-further.webp')" }}
      >
        <div className="absolute inset-0 bg-[#eef1fb]/82" />
        <div className="relative z-10 mx-auto max-w-[1120px]">
          <h1 className="text-[40px] font-bold leading-tight sm:text-[50px] lg:text-[58px]">
            {family.heading}
          </h1>
          <p className="mx-auto mt-5 max-w-[1040px] text-[16px] font-medium leading-relaxed text-[#252936] sm:text-[18px]">
            {family.intro}
          </p>
        </div>
      </section>

      <section className="rmg-model-section mx-auto max-w-[1720px] px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-[30px] font-bold leading-tight sm:text-[38px] lg:text-[44px]">
            <span className="text-[#fb6433]">Select your</span> {family.title}
            model
          </h2>
          <Link
            to={back.path}
            className="text-[15px] font-semibold text-[#fb6433] transition-colors duration-200 hover:text-[#df4a10]"
          >
            {back.label}
          </Link>
        </div>

        <div className="rmg-model-grid mt-12 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {family.models.map((model) => (
            <Link
              key={model.title}
              to={`/detail?slug=${model.detailSlug}`}
              className="rmg-model-card group text-center"
            >
              <div className="rmg-model-media flex h-[300px] items-center justify-center rounded-lg bg-[#f4f5f6] p-8 sm:h-[330px]">
                <img
                  src={model.image}
                  alt={model.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-[18px] font-bold leading-tight sm:text-[20px]">
                {model.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ModelSelection;
