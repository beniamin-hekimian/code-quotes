import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Generate from "./components/Generate";
import Footer from "./components/Footer";
import Application from "./components/Application";
import NoPage from "./components/NoPage";

export default function App() {
    return (
        <div id="app">
            <Routes>
                {/* Home Route */}
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Home />
                            <About />
                            <Gallery />
                            <Generate />
                            <Footer />
                        </>
                    }
                />

                {/* Application Route */}
                <Route path="/app" element={<Application />} />

                {/* 404 Route */}
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
}