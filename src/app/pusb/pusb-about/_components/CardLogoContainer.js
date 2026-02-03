import React from "react";
import SanctusLogo from "../../../../assets/logo_voxaris.png";
import CardLogoColor from "../../pusb-about/_components/CardLogoColor";
import { logoColor } from "../../../../lib/data";

const logoColorPositions = [-55, 14, 44, 0, -55];

const CardLogoContainer = () => {
  // Split colors for left and right columns
  const leftColors = logoColor.slice(0, 3); // Gray, Green, Blue
  const rightColors = logoColor.slice(3, 5); // Red, Yellow

  // Split positions corresponding to the colors
  // Initial: [-55, 14, 44, 0, -55]
  // Left: [-55, 14, 44]
  // Right: [0, -55] (You might want to adjust these to mirror or look good on the right side)
  // Let's assume we want them to look 'mirrored' or just positioned nicely.
  // The original code passed 'rightPosition' to 'right' style.
  // Ideally, for the right column, we might want to control 'left' or still 'right' but with different values?
  // CardLogoColor uses `style={{ right: rightPosition }}`.
  // If we move it to the right column, `right` style will push it from the right edge of that column.
  // Let's keep the values for now, but we might need to adjust them visually.
  // Red was index 3 (0), Yellow was index 4 (-55).

  const leftPositions = logoColorPositions.slice(0, 3);
  const rightPositions = logoColorPositions.slice(3, 5);

  return (
    <section className="w-full flex flex-col justify-center items-center px-4">
      <h2 className="p-4 text-2xl font-bold md:text-4xl lg:text-5xl text-center">
        Cabinet Logo PUSB 2025
      </h2>

      <p className="text-base font-medium text-justify mt-4 mb-16 max-w-3xl lg:text-left">
        Our logo symbolizes the sanctuary that portrays a haven of peace,
        safety, and continuous growth in a commitment. It also reflects a
        respected, safe, and supportive environment where every member can grow
        and make a positive contribution in our cabinet, Voxaris. The logo also
        consists of shapes and colors that represent the ministries of PUSB.
      </p>

      {/* Centered Color Header */}
      <div className="w-full text-center mb-8">
        <h1 className="text-3xl font-bold text-white">Color</h1>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Left Colors Container */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 items-center lg:items-start">
          {leftColors?.map((color, index) =>
            color ? (
              <CardLogoColor
                key={index}
                colorData={color}
                rightPosition={leftPositions[index] ?? 0}
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

        {/* Right Colors Container (formerly Shapes) */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 items-center lg:items-start">
          {rightColors?.map((color, index) =>
            color ? (
              <CardLogoColor
                key={index + 3} // Maintain unique key based on original index or just distinct
                colorData={color}
                rightPosition={rightPositions[index] ?? 0}
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default CardLogoContainer;
