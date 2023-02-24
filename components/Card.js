import React from "react";
import About from "./About";
import Footer from "./Footer";
import Info from "./Info";

export default function Card() {
    return (
        <div className="card">
            <Info />
            <div className="card__body">
                <About title="About" text="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn." />
                <About title="Interests" text="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
            </div>
            <Footer />
        </div>
    );
}