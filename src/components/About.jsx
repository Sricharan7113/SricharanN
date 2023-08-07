import React from "react";
import AboutImg from './Images/AboutPic.png';
import Header from "./Header";


function About() {
    return (
        <div>
            <Header></Header>


            <div className="AboutMe" id="AboutMe">
                <h1 className="Heading"> About Me </h1>
                <div className="AboutDiscription">
                    <img src={AboutImg} alt="AboutPic" className="AboutImage" id="AboutImage" />
                    <p id="AboutText">I am a B.Tech student studying <span className="SpanContent">Information Technology</span> with a strong passion for web development.
                        Proficient in HTML, CSS, JavaScript,Bootstrap and React JS, I have successfully completed multiple projects showcasing my ability to create visually appealing and user-friendly websites.
                        I constantly strive to stay updated with the latest web development trends and best practices to deliver cutting-edge solutions.
                        With a keen eye for problem-solving and a focus on optimizing website performance, security, and accessibility, I am dedicated to creating impactful online experiences.</p>
                </div>

            </div>  
        </div>


    )
}
export default About;