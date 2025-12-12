import React, { useState } from "react";
import { TfiExchangeVertical } from "react-icons/tfi";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { AiFillCaretRight } from "react-icons/ai";
import { Tooltip } from "flowbite-react";

const Page = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleIsEnglish = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="w-full min-h-[90vh] px-8 lg:px-16 flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full lg:max-w-4xl flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center md:pr-8 xl:pr-0">
            <div className="w-full flex justify-between items-center">
              <p className="text-base font-bold border-b py-1">
                {isEnglish ? "English" : "Indonesia"} Version
              </p>
              <Tooltip content={isEnglish ? "Indonesia" : "English"}>
                <button
                  onClick={handleIsEnglish}
                  className="animate-bounce w-8 h-8 flex justify-center items-center font-bold"
                >
                  <TfiExchangeVertical />
                </button>
              </Tooltip>
            </div>
            <div className="w-20 h-16 flex justify-center items-center mb-4 text-center">
              <LiaSuitcaseSolid className="w-8 h-8 text-white" />
            </div>

            <div className="max-w-xl mb-5 ml-3 text-center">
              <h2
                className={`max-w-lg mb-6 ml-5 font-sans tracking-tight sm:leading-none ${
                  isEnglish
                    ? "text-3xl font-bold sm:text-4xl"
                    : "text-2xl font-bold sm:text-3xl"
                }`}
              >
                {isEnglish
                  ? "Let us work together,"
                  : "Mari kita bekerja sama,"}
                <br />
                <span>
                  {isEnglish
                    ? "build a long-lasting relation with us."
                    : "membangun hubungan jangka panjang dengan kami."}
                </span>
              </h2>
              <p className="text-base md:text-lg">
                {isEnglish
                  ? "Standard procedures enhance transparency and efficiency. SOP guides effective teamwork, builds understanding and trust, and strengthens our partnerships."
                  : "Prosedur standar meningkatkan transparansi dan efisiensi. SOP memandu kerja tim yang efektif, membangun pemahaman dan kepercayaan, serta memperkuat kemitraan kami."}
              </p>
            </div>
            <div className="w-1/2 lg:w-1/3 group text-center py-2 border-2 rounded-lg">
              <a
                href={`${
                  isEnglish
                    ? "/pusb-sop/english-version"
                    : "/pusb-sop/indonesian-version"
                }?isEnglish=${isEnglish}`}
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Read PUSB SOP
                <AiFillCaretRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
