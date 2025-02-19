import { Link } from "react-router-dom";

export default function NoPage() {
    return (
        <main id="nopage" className="bg-black h-screen flex flex-col justify-center items-center gap-4">
            {/* 404 Heading */}
            <h2 className="bg-gradient-to-r from-mypink via-mypurple to-myblue text-transparent bg-clip-text font-semibold text-4xl sm:text-5xl lg:text-6xl text-center">
                404
            </h2>

            {/* Page Not Found Heading */}
            <h3 className="text-white font-semibold text-6xl sm:text-7xl lg:text-8xl text-center">
                Page not found
            </h3>

            {/* Error Message */}
            <p className="text-gray-300 lg:text-lg text-center mt-6">
                Sorry, we couldn't find the page you're looking for.
            </p>

            {/* Go Back Home Button */}
            <Link to="/" className="bg-gradient-to-r from-mypink via-mypurple to-myblue hover:shadow-mypurple hover:shadow-[0_0_12px] hover:duration-150 hover:cursor-pointer text-white rounded-lg px-3.5 py-2.5 text-sm font-semibold mt-4">
                Go back home
            </Link>
        </main>
    );
}