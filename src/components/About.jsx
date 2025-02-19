import first from './../assets/image-about-1.jpeg';
import second from './../assets/image-about-2.jpeg';
import third from './../assets/image-about-3.jpeg';

const steps = [
    {
        id: 1,
        title: "Upload Your Image",
        description: "To get started, click on the 'Upload Image' button on the homepage. This will open your device's file explorer, allowing you to select a photo of your choice. Once uploaded, your image will appear on the canvas, ready for customization!",
        image: first,
        alt: "Illustration of uploading an image to Code-Quotes",
        order: "default", // No special order for this step
    },
    {
        id: 2,
        title: "Personalize Your Quote",
        description: "Navigate to the text input area to type your motivational quote in the form of JavaScript (to ensure your quote stands out). As you type, you'll see a live preview of how your text overlays on the image. Feel free to adjust the font size of your quote.",
        image: second,
        alt: "Illustration of customizing a quote on Code-Quotes",
        order: "reverse", // This step has a reversed layout on larger screens
    },
    {
        id: 3,
        title: "Download Your Wallpaper",
        description: "You can also customize the aspect ratio by selecting from options like: mobile size, profile size or desktop size. After finishing customization, click on the 'Download' button. This will generate your customized wallpaper in the chosen format.",
        image: third,
        alt: "Illustration of downloading a customized wallpaper from Code-Quotes",
        order: "default", // No special order for this step
    },
];

export default function About() {
    return (
        <section id="about" className="bg-black flex flex-col items-center justify-center gap-12 py-12">
            {/* Section Heading */}
            <h2 className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl text-center">
                <span className="bg-gradient-to-r from-mypink via-mypurple to-myblue text-transparent bg-clip-text">About</span> Code-Quotes
            </h2>

            {/* Steps */}
            <main className="w-5/6 flex flex-col justify-center items-center gap-8">
                {steps.map((step) => (
                    <article
                        key={step.id}
                        className="w-full flex flex-col sm:flex-row justify-center items-center gap-6"
                    >
                        {/* Text Content */}
                        <div
                            className={`flex flex-col gap-2 ${
                                step.order === "reverse" ? "sm:order-1" : ""
                            }`}
                        >
                            <h3 className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl text-left">
                                {step.title}
                            </h3>
                            <p className="text-gray-300 lg:text-lg">{step.description}</p>
                        </div>

                        {/* Image */}
                        <img
                            src={step.image}
                            alt={step.alt}
                            className="w-full sm:w-1/2 lg:w-1/3 rounded-xl ring-4 ring-gray-300/30"
                        />
                    </article>
                ))}
            </main>
        </section>
    );
}