import { Josefin_Sans } from "next/font/google";
import { Gallery } from "./Gallery";

const font = Josefin_Sans({ subsets: ["latin"], weight: ["300"] });

export const HomeBot = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className={`${font.className} text-5xl uppercase`}>
          Our creations
        </div>
        <div>
          <a
            href="#"
            className="border-2 border-black hover:text-white hover:bg-black px-9 py-2 uppercase tracking-[4px]"
          >
            See all
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-16 mb-52">
        <Gallery />
      </div>
    </div>
  );
};
