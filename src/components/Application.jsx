import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import html2canvas from 'html2canvas';

export default function Application(){
    useEffect(() => {
        // Dynamically load the external JavaScript file
        const script = document.createElement("script");
        script.src = "/application.js"; // Reference the file in the public folder
        script.async = true;
        document.body.appendChild(script);

        // Clean up: Remove the script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Runs only on mount

    useEffect(() => {
        const container = document.getElementById("container"); // Ensure your container has this ID

        const handleMobileClick = () => {
            if (container) {
                container.style.width = "450px";
                container.style.height = "800px"; // 9:16 ratio
            }
        };

        const handleProfileClick = () => {
            if (container) {
                container.style.width = "625px";
                container.style.height = "625px"; // 1:1 ratio
            }
        };

        const handleDesktopClick = () => {
            if (container) {
                container.style.width = "800px";
                container.style.height = "450px"; // 16:9 ratio
            }
        };

        const mobileBtn = document.getElementById("mobile-size");
        const profileBtn = document.getElementById("profile-size");
        const desktopBtn = document.getElementById("desktop-size");

        if (mobileBtn) mobileBtn.addEventListener("click", handleMobileClick);
        if (profileBtn) profileBtn.addEventListener("click", handleProfileClick);
        if (desktopBtn) desktopBtn.addEventListener("click", handleDesktopClick);

        // Cleanup event listeners
        return () => {
            if (mobileBtn) mobileBtn.removeEventListener("click", handleMobileClick);
            if (profileBtn) profileBtn.removeEventListener("click", handleProfileClick);
            if (desktopBtn) desktopBtn.removeEventListener("click", handleDesktopClick);
        };
    }, []); // Runs only on mount

    const [backgroundImage, setBackgroundImage] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setBackgroundImage(e.target.result); // Set the background image
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDownload = () => {
        const container = document.getElementById("container");
    
        html2canvas(container).then((canvas) => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "code-quote.png";
            link.click();
        });
    };
    

    return(
        <main id="application" className="bg-zinc-900 font-mono min-h-screen grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
            {/* sidebar left column */}
            <div className="controls bg-zinc-900 text-white sm:col-span-1 lg:col-span-1 flex flex-col gap-6 items-center p-4 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <div className="w-full flex justify-between items-center gap-4">
                    <Link to="../" className="bg-gradient-to-r from-[#de5197] via-[#a354f5] to-[#6770e9] hover:cursor-pointer rounded-lg w-auto p-0.5 flex items-center justify-center">
                        <div className="bg-zinc-900 hover:bg-transparent hover:duration-300 flex h-full w-full itmes-center justify-center rounded-lg py-1 px-3 text-xl font-bold">←</div>
                    </Link>
                    <h1 className="text-white text-4xl font-semibold my-4 flex-1 text-center">
                        Code-Quotes
                    </h1>
                </div>
                <label className="file-label bg-gradient-to-r from-[#de5197] via-[#a354f5] to-[#6770e9] hover:shadow-[#a354f5] hover:shadow-[0_0_12px] hover:duration-150 hover:cursor-pointer rounded-lg w-full text-center p-3" htmlFor="file-input">
                    Background Image
                </label>
                <input type="file" id="file-input" accept="image/*" className="hidden" onChange={handleFileChange} />
                <textarea id="quote-input" rows="10" spellcheck="false" placeholder="console.log(&quot;Hello World&quot;);" className="bg-zinc-800 w-full rounded-md text-sm p-1 shadow-[0_0_20px_rgba(0,0,0,0.5)]">console.log("Hello World");</textarea>
                <div className="font-size-controls flex flex-row justify-between items-center w-full">
                    <button className="font-btn bg-gradient-to-r from-[#de5197] via-[#a354f5] to-[#6770e9] hover:shadow-[#a354f5] hover:shadow-[0_0_12px] hover:duration-150 hover:cursor-pointer rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] px-4 py-2" id="decrease-font">-</button>
                    <span className="font-size-label text-center">Font Size: <span id="font-size-value">1</span>rem</span>
                    <button className="font-btn bg-gradient-to-r from-[#de5197] via-[#a354f5] to-[#6770e9] hover:shadow-[#a354f5] hover:shadow-[0_0_12px] hover:duration-150 hover:cursor-pointer rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] px-4 py-2" id="increase-font">+</button>
                </div>
                <div className="aspect-ratio-controls flex justify-center items-center gap-2 w-full">
                    <button className="half-btn bg-gradient-to-r from-[#de5197] via-[#a354f5] to-[#6770e9] hover:cursor-pointer rounded-lg w-full p-0.5 flex items-center justify-center" id="mobile-size"><div className="bg-zinc-900 hover:bg-transparent hover:duration-300 flex h-full w-full items-center justify-center rounded-lg py-1">Mobile [9:16]</div></button>
                    <button className="half-btn bg-gradient-to-r from-[#de5197] via-[#a354f5] to-[#6770e9] hover:cursor-pointer rounded-lg w-full p-0.5 flex items-center justify-center" id="profile-size"><div className="bg-zinc-900 hover:bg-transparent hover:duration-300 flex h-full w-full items-center justify-center rounded-lg py-1">Profile [1:1]</div></button>
                    <button className="half-btn bg-gradient-to-r from-[#de5197] via-[#a354f5] to-[#6770e9] hover:cursor-pointer rounded-lg w-full p-0.5 flex items-center justify-center" id="desktop-size"><div className="bg-zinc-900 hover:bg-transparent hover:duration-300 flex h-full w-full items-center justify-center rounded-lg py-1">Desktop [16:9]</div></button>
                </div>
                <button
                    className="btn bg-gradient-to-r from-[#de5197] via-[#a354f5] to-[#6770e9] hover:shadow-[#a354f5] hover:shadow-[0_0_12px] hover:duration-150 hover:cursor-pointer rounded-lg w-full text-center p-3"
                    onClick={handleDownload}
                >
                    Download
                </button>
            </div>
            {/* canvas right column */}
            <div className="sm:col-span-2 lg:col-span-3 flex justify-center items-center p-2">
                <div id="container" className="container relative overflow-hidden w-[625px] h-[625px] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <div
                        id="preview"
                        className="bg-zinc-800 w-full h-full relative flex justify-center items-center"
                        style={{
                            backgroundImage: `url(${backgroundImage})`, // Use state value
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="quote-overlay absolute w-full h-full flex justify-center items-center p-16 bg-black bg-opacity-50 mix-blend-screen">
                            <pre id="quote-text" className="text-white text-base text-left whitespace-pre-wrap shadow-[2px_2px_4px_rgba(0,0,0,0.5) text-left]"></pre>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}