const navigations = [
    { id: 1, href: "/#home", text: "Home" },
    { id: 2, href: "/#about", text: "About" },
    { id: 3, href: "/#gallery", text: "Gallery" },
];

export default function Footer() {
    return (
        <footer id="footer" className="bg-black flex flex-col sm:flex-row sm:justify-between justify-center items-center gap-1 p-2">
            {/* Copyright and Creator Information */}
            <div>
                <small className="text-gray-500 text-sm text-center sm:text-left">
                    &copy; {new Date().getFullYear()} Code-Quotes. All rights reserved.
                </small>
                <p className="text-gray-500 text-sm text-center sm:text-left">
                    Created by Beniamin Hekimian.
                </p>
            </div>

            {/* Navigation Links */}
            <ul className="hidden sm:flex gap-2">
                {navigations.map((nav) => (
                    <li key={nav.id}>
                        <a
                            href={nav.href}
                            className="text-gray-500 rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300"
                            aria-label={`Navigate to ${nav.text}`}
                        >
                            {nav.text}
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}