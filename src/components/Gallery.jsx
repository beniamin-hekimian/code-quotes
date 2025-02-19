import { useState } from "react";

// Define the image paths manually
const galleryImages = [
    { id: 1, src: new URL("./../assets/platform-gallery/gallery1.png", import.meta.url).href, alt: "Gallery image 1" },
    { id: 2, src: new URL("./../assets/platform-gallery/gallery2.png", import.meta.url).href, alt: "Gallery image 2" },
    { id: 3, src: new URL("./../assets/platform-gallery/gallery3.png", import.meta.url).href, alt: "Gallery image 3" },
    { id: 4, src: new URL("./../assets/platform-gallery/gallery4.png", import.meta.url).href, alt: "Gallery image 4" },
    { id: 5, src: new URL("./../assets/platform-gallery/gallery5.png", import.meta.url).href, alt: "Gallery image 5" },
    { id: 6, src: new URL("./../assets/platform-gallery/gallery6.png", import.meta.url).href, alt: "Gallery image 6" },
    { id: 7, src: new URL("./../assets/platform-gallery/gallery7.png", import.meta.url).href, alt: "Gallery image 7" },
    { id: 8, src: new URL("./../assets/platform-gallery/gallery8.png", import.meta.url).href, alt: "Gallery image 8" },
    { id: 9, src: new URL("./../assets/platform-gallery/gallery9.png", import.meta.url).href, alt: "Gallery image 9" },
    { id: 10, src: new URL("./../assets/platform-gallery/gallery10.png", import.meta.url).href, alt: "Gallery image 10" },
    { id: 11, src: new URL("./../assets/platform-gallery/gallery11.png", import.meta.url).href, alt: "Gallery image 11" },
    { id: 12, src: new URL("./../assets/platform-gallery/gallery12.png", import.meta.url).href, alt: "Gallery image 12" },
    { id: 13, src: new URL("./../assets/platform-gallery/gallery13.png", import.meta.url).href, alt: "Gallery image 13" },
    { id: 14, src: new URL("./../assets/platform-gallery/gallery14.png", import.meta.url).href, alt: "Gallery image 14" },
    { id: 15, src: new URL("./../assets/platform-gallery/gallery15.png", import.meta.url).href, alt: "Gallery image 15" },
    { id: 16, src: new URL("./../assets/platform-gallery/gallery16.png", import.meta.url).href, alt: "Gallery image 16" },
    { id: 17, src: new URL("./../assets/platform-gallery/gallery17.png", import.meta.url).href, alt: "Gallery image 17" },
    { id: 18, src: new URL("./../assets/platform-gallery/gallery18.png", import.meta.url).href, alt: "Gallery image 18" },
    { id: 19, src: new URL("./../assets/platform-gallery/gallery19.png", import.meta.url).href, alt: "Gallery image 19" },
    { id: 20, src: new URL("./../assets/platform-gallery/gallery20.png", import.meta.url).href, alt: "Gallery image 20" },
];

export default function Gallery() {
    const [isOpen, setIsOpen] = useState(false);

    // Determine the number of images to show based on screen size and "Show more" state
    const initialImages = window.innerWidth < 640 ? 5 : 10; // 5 for small screens, 10 for larger screens
    const imagesToShow = isOpen ? (window.innerWidth < 640 ? 10 : galleryImages.length) : initialImages;

    return (
        <section id="gallery" className="bg-black flex flex-col items-center justify-center gap-8 p-5 md:p-10">
            {/* Heading */}
            <h2 className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl text-center">
                <span className="bg-gradient-to-r from-mypink via-mypurple to-myblue text-transparent bg-clip-text">
                    Platform
                </span>{" "}
                Gallery
            </h2>

            {/* Gallery Images */}
            <main className="w-11/12 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 [&>img:not(:first-child)]:mt-4 [&>img]:w-full [&>img]:rounded-lg">
                {/* Show images based on screen size and "Show more" state */}
                {galleryImages.slice(0, imagesToShow).map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        className="w-full rounded-lg"
                        loading="lazy" // Lazy load images for better performance
                    />
                ))}
            </main>

            {/* Show More/Less Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gradient-to-r from-mypink via-mypurple to-myblue hover:shadow-mypurple hover:shadow-[0_0_12px] hover:duration-150 hover:cursor-pointer text-white rounded-lg px-3.5 py-2.5 text-sm font-semibold"
            >
                {isOpen ? "Show less" : "Show more"}
            </button>
        </section>
    );
}