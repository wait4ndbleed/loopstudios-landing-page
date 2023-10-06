import { Josefin_Sans } from "next/font/google";

const font = Josefin_Sans({ subsets: ['latin'], weight: ['300'] });

export const HomeTop = () => {
    return (
        <div className="bg-[url('../assets/images/desktop/image-interactive.jpg')] bg-no-repeat mt-[160px] mb-28 flex justify-end">
            <div className="bg-white max-w-[50%] pt-24 pl-24 pr-16 mt-48">
                <h1 className={`${font.className} text-5xl uppercase`}>The leader in interactive vr</h1>
                <p className="text-sm text-[var(--dark-gray)]">
                    Founded in 2011, Loopstudios has benn producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                </p>
            </div>
        </div>
    )
}