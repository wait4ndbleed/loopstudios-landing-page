import { Josefin_Sans } from "next/font/google";

const font = Josefin_Sans({ subsets: ["latin"], weight: ["300"] });

export const Gallery = () => {
  return (
    <div
      className={`${font.className} grid lg:grid-cols-3 xl:grid-cols-4 w-full gap-[31px]`}
    >
      <div className="relative group h-40 lg:h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/mobile/image-deep-earth.jpg')] lg:bg-[url('../assets/images/desktop/image-deep-earth.jpg')] bg-cover h-40 lg:h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 max-w-[150px] text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          Deep earth
        </div>
      </div>
      <div className="relative group h-40 lg:h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/50 bg-[url('../assets/images/mobile/image-night-arcade.jpg')] lg:bg-[url('../assets/images/desktop/image-night-arcade.jpg')] bg-cover h-40 lg:h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 max-w-[150px] text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          Night arcade
        </div>
      </div>
      <div className="relative group h-40 lg:h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/mobile/image-soccer-team.jpg')] lg:bg-[url('../assets/images/desktop/image-soccer-team.jpg')] bg-cover h-40 lg:h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 max-w-[250px] text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          Soccer team vr
        </div>
      </div>
      <div className="relative group h-40 lg:h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/mobile/image-grid.jpg')] lg:bg-[url('../assets/images/desktop/image-grid.jpg')] bg-cover h-40 lg:h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 max-w-[150px] text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          The grid
        </div>
      </div>
      <div className="relative group h-40 lg:h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/mobile/image-from-above.jpg')] lg:bg-[url('../assets/images/desktop/image-from-above.jpg')] bg-cover h-40 lg:h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 max-w-[250px] text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          From up above vr
        </div>
      </div>
      <div className="relative group h-40 lg:h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/mobile/image-pocket-borealis.jpg')] lg:bg-[url('../assets/images/desktop/image-pocket-borealis.jpg')] bg-cover h-40 lg:h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 max-w-[150px] text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          Pocket borealis
        </div>
      </div>
      <div className="relative group h-40 lg:h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/mobile/image-curiosity.jpg')] lg:bg-[url('../assets/images/desktop/image-curiosity.jpg')] bg-cover h-40 lg:h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 max-w-[150px] text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          The curiosity
        </div>
      </div>
      <div className="relative group h-40 lg:h-[450px]">
        <div
          className={`group-hover:opacity-40 after:content-[''] after:relative after:min-h-full after:min-w-full after:bg-gradient-to-t after:from-black/30 bg-[url('../assets/images/mobile/image-fisheye.jpg')] lg:bg-[url('../assets/images/desktop/image-fisheye.jpg')] bg-cover h-40 lg:h-[450px] flex flex-col justify-end cursor-pointer`}
        ></div>
        <div className="relative uppercase px-10 py-8 max-w-[250px] text-3xl text-white group-hover:text-black -top-32 cursor-pointer">
          Make it fisheye
        </div>
      </div>
    </div>
  );
};
