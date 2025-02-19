import { Link } from "react-router-dom";

export default function Generate() {
    return (
        <section id="generate" className="bg-black bg-[url('./assets/gradient.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-8 py-8">
            {/* Heading */}
            <p className="w-2/3 text-white font-semibold text-3xl sm:text-4xl lg:text-5xl text-center">
                Create your next{' '}
                <span className="bg-gradient-to-r from-mypink via-mypurple to-myblue text-transparent bg-clip-text">
                    artwork
                </span>
                , with the power of Code-Quotes
            </p>

            {/* Call-to-Action Button */}
            <Link to="/app" className="bg-gradient-to-r from-mypink via-mypurple to-myblue hover:shadow-mypurple hover:shadow-[0_0_12px] hover:duration-150 hover:cursor-pointer text-white rounded-lg px-3.5 py-2.5 text-sm font-semibold">
                Start using Code-Quotes →
            </Link>
        </section>
    );
}