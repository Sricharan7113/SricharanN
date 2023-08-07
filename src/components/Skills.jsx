import React from "react";
import Java from "./Images/Java.png";
import HTML from "./Images/HTML.png";
import CSS from "./Images/CSS.png";
import JS from "./Images/JS.png";
import ReactJS from "./Images/ReactJS.png";
import Header from "./Header";



function Skills() {
    return (
        <div>
            <Header></Header>
            <div className="SkillContainer" id="SkillContainer">

                <h1 className="Heading"> Skills </h1>

                <div className="MySkills">
                    <div className="Skill" id="Skill">
                        <img src={Java} className="SkillsImg"></img>
                        <h3 className="SkillName" id="SkillName">Java Programming</h3>
                    </div>

                    <div className="Skill" id="Skill">
                        <img src={HTML} className="SkillsImg"></img>
                        <h3 className="SkillName" id="SkillName">HTML</h3>
                    </div>

                    <div className="Skill" id="Skill">
                        <img src={CSS} className="SkillsImg"></img>
                        <h3 className="SkillName" id="SkillName">CSS</h3>
                    </div>

                    <div className="Skill" id="Skill">
                        <img src={JS} className="SkillsImg"></img>
                        <h3 className="SkillName" id="SkillName">JavaScript</h3>
                    </div>

                    <div className="Skill" id="Skill">
                        <img src={ReactJS} className="SkillsImg"></img>
                        <h3 className="SkillName" id="SkillName">React JS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Skills;