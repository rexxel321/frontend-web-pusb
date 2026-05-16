import React from "react";
import SanctusLogo from "../../../../assets/logo_voxaris.png";
import CardLogoColor from "../../pusb-about/_components/CardLogoColor";
import { logoColor } from "../../../../lib/data";

const leftColorPositions = [-55, 14, 44];
const rightColorPositions = [14, -55];

const CardLogoContainer = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center px-4">
      <h2 className="p-4 text-2xl font-bold md:text-4xl lg:text-5xl text-center">
        Cabinet Logo PUSB 2026
      </h2>

      <p className="text-base font-medium text-justify mt-4 mb-16 max-w-3xl lg:text-left">
        Our logo symbolizes the sanctuary that portrays a haven of peace,
        safety, and continuous growth in a commitment. It also reflects a
        respected, safe, and supportive environment where every member can grow
        and make a positive contribution in our cabinet, Voxaris. The logo also
        consists of colors that represent the ministries of PUSB.
      </p>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Logo Colors Container Left */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 items-center lg:items-start">
          <div className="w-full text-center lg:text-left">
            <h1 className="text-3xl font-bold text-white">Color</h1>
          </div>
          {logoColor?.slice(0, 3).map((color, index) =>
            color ? (
              <CardLogoColor
                key={`left-${index}`}
                colorData={color}
                rightPosition={leftColorPositions[index] ?? 0}
              />
            ) : null
          )}
        </div>

        {/* Logo Image */}
        <div className="relative flex justify-center">
          <img
            src={SanctusLogo}
            alt="Voxaris Cabinet Logo"
            width="200"
            height="200"
            className="h-[200px] w-[200px] rounded-3xl duration-300 hover:scale-110 hover:shadow-xl z-10"
          />
        </div>

        {/* Logo Colors Container Right */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 items-center lg:items-end">
          <div className="w-full text-center lg:text-right hidden lg:block opacity-0 select-none">
            <h1 className="text-3xl font-bold text-white">Color</h1>
          </div>
          {logoColor?.slice(3, 5).map((color, index) =>
            color ? (
              <CardLogoColor
                key={`right-${index}`}
                colorData={color}
                leftPosition={rightColorPositions[index] ?? 0}
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default CardLogoContainer;
