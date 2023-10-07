import { Josefin_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const font = Josefin_Sans({ subsets: ["latin"], weight: ["300"] });

export const HomeTop = () => {
  return (
    <div className="bg-[url('../assets/images/mobile/image-interactive.jpg')] md:bg-[url('../assets/images/desktop/image-interactive.jpg')] bg-contain bg-no-repeat mt-[160px] mb-28 flex justify-end">
      <div className="md:bg-white lg:max-w-[50%] pt-24 md:pl-24 md:pr-16 mt-48 md:mt-[500px] lg:mt-48">
        <h1
          className={`${font.className} text-3xl md:text-5xl uppercase mb-6 text-center lg:text-left`}
        >
          The leader in interactive vr
        </h1>
        <p className="text-sm text-center lg:text-left text-[var(--dark-gray)]">
          Founded in 2011, Loopstudios has benn producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};
