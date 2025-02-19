import { Link } from "react-router-dom";
import hero from './../assets/code-quote-home.jpeg';

export default function Home() {
    return (
        <section id="home" className="bg-black flex flex-col items-center justify-center text-center bg-leonardo-gradient bg-no-repeat bg-center bg-cover relative">
            {/* Background Grid */}
            <div className="bg-leonardo-grid bg-no-repeat bg-cover w-full h-screen absolute z-0 pointer-events-none"></div>

            {/* Heading */}
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold w-11/12 mt-40">
                Code-Quotes Generator
            </h1>

            {/* Description */}
            <p className="text-gray-300 lg:text-lg w-3/4 md:w-2/3 lg:w-1/2 mt-8">
                Generate stunning wallpapers with motivational quotes designed as JavaScript code, transforming your screen into a source of daily inspiration.
            </p>

            {/* Buttons */}
            <div className="flex gap-x-6 items-center mt-8">
                <Link
                    to="/app"
                    className="bg-white/30 backdrop-blur-xl hover:bg-white/40 hover:shadow-white/30 hover:shadow-[0_0_12px] hover:duration-150 hover:cursor-pointer text-white rounded-lg px-3.5 py-2.5 text-sm font-semibold"
                >
                    Get started
                </Link>
                <a
                    className="text-gray-300 hover:text-white text-sm font-semibold"
                    href="/#about"
                >
                    Learn more →
                </a>
            </div>

            {/* Hero Image */}
            <img
                src={hero}
                alt="Example of a motivational quote designed as JavaScript code on a wallpaper"
                className="w-5/6 mt-12 mb-8 rounded-2xl ring-8 ring-gray-300/30 relative z-10"
            />
        </section>
    );
}