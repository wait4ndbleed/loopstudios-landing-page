import { Josefin_Sans } from "next/font/google";

const font = Josefin_Sans({ subsets: ["latin"], weight: ["300"] });

export const Gallery = () => {
  return (
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-[31px]">
      <div
        className={`${font.className} bg-[url('../assets/images/desktop/image-deep-earth.jpg')] bg-cover h-[450px]  text-white uppercase flex flex-col justify-end px-10 py-8 text-3xl`}
      >
        Deep earth
      </div>
      <div
        className={`${font.className} bg-[url('../assets/images/desktop/image-night-arcade.jpg')] bg-cover h-[450px]  text-white uppercase flex flex-col justify-end px-10 py-8 text-3xl`}
      >
        Night arcade
      </div>
      <div
        className={`${font.className} bg-[url('../assets/images/desktop/image-soccer-team.jpg')] bg-cover h-[450px]  text-white uppercase flex flex-col justify-end px-10 py-8 text-3xl`}
      >
        Soccer team vr
      </div>
      <div
        className={`${font.className} bg-[url('../assets/images/desktop/image-grid.jpg')] bg-cover h-[450px]  text-white uppercase flex flex-col justify-end pr-20 pl-10 py-8 text-3xl`}
      >
        The grid
      </div>
      <div
        className={`${font.className} bg-[url('../assets/images/desktop/image-from-above.jpg')] bg-cover h-[450px]  text-white uppercase flex flex-col justify-end px-10 py-8 text-3xl`}
      >
        From up above vr
      </div>
      <div
        className={`${font.className} bg-[url('../assets/images/desktop/image-pocket-borealis.jpg')] bg-cover h-[450px]  text-white uppercase flex flex-col justify-end px-10 py-8 text-3xl`}
      >
        Pocket borealis
      </div>
      <div
        className={`${font.className} bg-[url('../assets/images/desktop/image-curiosity.jpg')] bg-cover h-[450px]  text-white uppercase flex flex-col justify-end px-10 py-8 text-3xl`}
      >
        The curiosity
      </div>
      <div
        className={`${font.className} bg-[url('../assets/images/desktop/image-fisheye.jpg')] bg-cover h-[450px]  text-white uppercase flex flex-col justify-end px-10 py-8 text-3xl`}
      >
        Make it fisheye
      </div>
    </div>
  );
};
