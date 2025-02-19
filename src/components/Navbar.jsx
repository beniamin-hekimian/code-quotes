const navigations = [
    { id: 1, href: "/#home", text: "Home" },
    { id: 2, href: "/#about", text: "About" },
    { id: 3, href: "/#gallery", text: "Gallery" },
];

export default function Navbar() {
    return (
        <nav className="bg-transparent flex justify-between items-center h-16 px-4 absolute z-10 w-full">
            {/* Brand Logo/Text */}
            <a href="/#">
                <p className="text-white text-4xl font-bold">CQ</p>
            </a>

            {/* Navigation Links */}
            <ul className="hidden sm:flex gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                {navigations.map((nav) => (
                    <li key={nav.id}>
                        <a
                            href={nav.href}
                            className="text-gray-300 rounded-md px-3 py-2 text-sm font-medium hover:text-white"
                        >
                            {nav.text}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Call-to-Action Button */}
            <a
                href="/#generate"
                className="bg-white/30 backdrop-blur-xl hover:bg-white/40 hover:shadow-white/30 hover:shadow-[0_0_12px] hover:duration-150 hover:cursor-pointer text-white rounded-lg px-3.5 py-2.5 text-sm font-semibold"
            >
                Generate
            </a>
        </nav>
    );
}