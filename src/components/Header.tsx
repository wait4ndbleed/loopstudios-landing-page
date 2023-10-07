import { Josefin_Sans } from "next/font/google";

const font = Josefin_Sans({ subsets: ['latin'], weight: ['300'] });

export const Header = () => {
  return (
    <header className="max-w-[var(--max-width)] m-auto pt-16 pb-36 pr-[var(--side-padding)] pl-[var(--side-padding)] bg-[url(../assets/images/desktop/image-hero.jpg)] bg-cover bg-no-repeat">
      <div className="flex justify-between">
        <div>
          <a href="#" aria-label="Home Page"><img src="../assets/images/logo.svg" alt="" /></a>
        </div>
        <div className="text-white font-normal">
            <ul className="flex gap-10">
                <li><a href="#" className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-1/2 hover:after:bg-white">About</a></li>
                <li><a href="#" className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-1/2 hover:after:bg-white">Careers</a></li>
                <li><a href="#" className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-1/2 hover:after:bg-white">Events</a></li>
                <li><a href="#" className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-1/2 hover:after:bg-white">Products</a></li>
                <li><a href="#" className="relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2 after:top-[150%] after:h-[3px] after:w-1/2 hover:after:bg-white">Support</a></li>
            </ul>
        </div>
      </div>
      <div className={`${font.className} uppercase text-white text-7xl border-2 border-white w-[580px] p-8 pr-0 mt-32`}>
        Immersive experiences that deliver
      </div>
    </header>
  );
};
