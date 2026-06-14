import { useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getRepairOptions, repairDetails } from "../data/repairDetails";

const RepairDetail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug") || "";
  const detail = repairDetails[slug] || repairDetails["iphone-14-pro-max-repairs"];
  const options = useMemo(() => getRepairOptions(detail.category), [detail]);
  const [selected, setSelected] = useState([]);
  const backLinks = {
    samsung: "/samsung repairs",
    ipad: "/ipad repair",
    watch: "/watch repair",
    mac: "/mac repair",
    iphone: "/iphone repair",
    ipod: "/ipod repair",
  };

  const toggleOption = (title) => {
    setSelected((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  };

  const submitBooking = () => {
    const selectedIssues = options.filter((option) =>
      selected.includes(option.title)
    );

    if (selectedIssues.length === 0) return;

    const booking = {
      productName: detail.title,
      productImage: detail.image,
      category: detail.category,
      issues: selectedIssues,
    };

    sessionStorage.setItem("repairBooking", JSON.stringify(booking));
    navigate("/checkout", { state: { booking } });
  };

  return (
    <div className="bg-white text-[#171a23]">
      <section
        className="relative flex min-h-[310px] items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url('/imgi_8_about-further.webp')" }}
      >
        <div className="absolute inset-0 bg-[#eef1fb]/82" />
        <div className="relative z-10 mx-auto max-w-[1120px]">
          <h1 className="text-[38px] font-extrabold leading-tight text-[#171a23] sm:text-[48px] lg:text-[56px]">
            Repairs Detail
          </h1>
          <p className="mx-auto mt-5 max-w-[980px] text-[15px] font-medium leading-relaxed text-[#252936] sm:text-[17px]">
            Select the services you need for {detail.title}. We will confirm
            availability, final pricing and repair time before starting.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1700px] px-6 py-14 sm:px-10 lg:px-20 lg:py-16">
        <div className="border border-neutral-300 bg-[#fafafa] p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-start">
            <div>
              <h2 className="text-[28px] font-extrabold leading-tight sm:text-[34px]">
                {detail.title}
              </h2>
              <div className="mt-6 flex h-[270px] max-w-[300px] items-center justify-center rounded-md border border-neutral-300 bg-[#f3f5f7] p-6">
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            <div className="lg:pt-16">
              <p className="text-[16px] leading-relaxed text-[#3e4650] sm:text-[17px]">
                <span className="font-semibold text-[#171a23]">Description:</span>{" "}
                {detail.intro}
              </p>
              <Link
                to={backLinks[detail.category] || "/iphone repair"}
                className="mt-5 inline-flex text-[14px] font-bold text-[#fb6433] transition-colors duration-200 hover:text-[#df4a10]"
              >
                Back to models
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {options.map((option) => {
              const checked = selected.includes(option.title);

              return (
                <label
                  key={option.title}
                  className={`grid cursor-pointer grid-cols-[34px_1fr] gap-5 rounded-md border bg-white p-5 transition-colors duration-200 sm:p-6 ${
                    checked
                      ? "border-[#fb6433] bg-[#fff7f3]"
                      : "border-neutral-300 hover:border-[#fb6433]/60"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleOption(option.title)}
                    className="mt-1 h-6 w-6 accent-[#fb6433]"
                  />
                  <span>
                    <span className="block text-[24px] font-extrabold leading-tight text-[#252936] sm:text-[28px]">
                      {option.title}
                    </span>
                    <span className="mt-6 block text-[16px] leading-relaxed text-[#3e4650] sm:text-[17px]">
                      <span className="font-semibold text-[#171a23]">
                        Description:
                      </span>{" "}
                      {option.description}
                    </span>
                    <span className="mt-3 block text-[16px] font-semibold text-[#3e4650] sm:text-[17px]">
                      Price: {option.price}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>

          <button
            type="button"
            className="mt-8 flex min-h-[70px] w-full items-center rounded-md bg-[#fb6433] px-8 text-left text-[18px] font-extrabold text-white transition-colors duration-200 hover:bg-[#df4a10] disabled:cursor-not-allowed disabled:bg-[#ffd8ca] disabled:text-[#b78373]"
            disabled={selected.length === 0}
            onClick={submitBooking}
          >
            Submit
            {selected.length > 0 && (
              <span className="ml-3 text-[14px] font-semibold text-white/80">
                ({selected.length} selected)
              </span>
            )}
          </button>
        </div>
      </section>
    </div>
  );
};

export default RepairDetail;
