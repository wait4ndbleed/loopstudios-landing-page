import { Josefin_Sans } from "next/font/google";

const font = Josefin_Sans({ subsets: ["latin"], weight: ["300"] });

export const Gallery = () => {
  return (
    <div
      className={`${font.className} grid lg:grid-cols-3 xl:grid-cols-4 gap-[31px]`}
    >
      <div className="relative group h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/desktop/image-deep-earth.jpg')] bg-cover h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          Deep earth
        </div>
      </div>
      <div className="relative group h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/desktop/image-night-arcade.jpg')] bg-cover h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          Night arcade
        </div>
      </div>
      <div className="relative group h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 after:top-0 after:left-0 bg-[url('../assets/images/desktop/image-soccer-team.jpg')] bg-cover h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase pl-10 py-8 text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          Soccer team vr
        </div>
      </div>
      <div className="relative group h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/desktop/image-grid.jpg')] bg-cover h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 w-0 text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          The grid
        </div>
      </div>
      <div className="relative group h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/desktop/image-from-above.jpg')] bg-cover h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase pl-10 py-8 text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          From up above vr
        </div>
      </div>
      <div className="relative group h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/desktop/image-pocket-borealis.jpg')] bg-cover h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          Pocket borealis
        </div>
      </div>
      <div className="relative group h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/desktop/image-curiosity.jpg')] bg-cover h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          The curiosity
        </div>
      </div>
      <div className="relative group h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/desktop/image-fisheye.jpg')] bg-cover h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          Make it fisheye
        </div>
      </div>
    </div>
  );
};
