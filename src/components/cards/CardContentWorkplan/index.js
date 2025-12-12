import React from "react";
import { Card } from "flowbite-react";
import Foto from "@/assets/s.png"; // Adjust path if needed

const CardContentWorkplan = () => {
  return (
    <Card className="group relative block bg-black border-0 shadow-sm shadow-white p-2">
      <div className="relative">
        {/* Image */}
        <img
          alt="Developer"
          src={Foto}
          width={300}
          height={300}
          className="absolute inset-0 h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
        />

        {/* Category & Title */}
        <p className="text-xs font-medium uppercase tracking-widest text-pink-500">
          Post <span># 1</span>
        </p>
        <p className="text-lg font-bold text-white sm:text-xl">
          PRESIDENT UNIVERSITY CLUB
        </p>

        {/* Description & Link */}
        <div className="mt-12">
          <div className="pt-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 line-clamp-4">
            <a
              href="https://www.instagram.com/p/C6tPCPcp1gL/?utm_source=ig_web_copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white text-justify hover:underline"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos suscipit ea impedit, assumenda fugiat dicta
              reiciendis, sed et aliquam aut expedita maiores, laboriosam
              eligendi dolor eaque consequuntur adipisci nihil molestiae?
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardContentWorkplan;
