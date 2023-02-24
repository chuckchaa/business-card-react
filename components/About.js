import React from "react";

export default function About(props) {
    return (
        <div className="about">
            <h3 className="about__title">{props.title}</h3>
            <p className="about__text">{props.text}</p>
        </div>
    );
}