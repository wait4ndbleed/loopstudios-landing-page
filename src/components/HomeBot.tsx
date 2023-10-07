import { Josefin_Sans } from "next/font/google";
import { Gallery } from "./Gallery";

const font = Josefin_Sans({ subsets: ["latin"], weight: ["300"] });

export const HomeBot = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className={`${font.className} text-3xl md:text-5xl text-center md:text-left w-full md:w-auto uppercase`}>
          Our creations
        </div>
        <div className="hidden md:block">
          <a
            href="#"
            className="border-2 border-black hover:text-white hover:bg-black px-9 py-2 uppercase tracking-[4px]"
          >
            See all
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-16 mb-28 md:mb-52">
        <Gallery />
        <div className="flex justify-center md:hidden mt-14">
          <a
            href="#"
            className="border-2 border-black hover:text-white hover:bg-black px-9 py-2 uppercase tracking-[4px]"
          >
            See all
          </a>
        </div>
      </div>
      
    </div>
  );
};
