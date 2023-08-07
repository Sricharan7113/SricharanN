import React from "react";
import ShoplineImg from './Images/Shopline.png';
import Swift from './Images/Swift.png';
import RockPaperScissors from './Images/RockPaperScissors.png';
import ToDo from './Images/ToDo.png';
import TicTacToe from './Images/TicTacToe.png';
import More from './Images/More.png';
import Header from "./Header";
function Project() {
    return (
        <div>
            <Header></Header>

            <div className="Projects">
                <h1 className="Heading"> Projects </h1>
                <div className="ProjectsContainer" id="ProjectsContainer">

                    <a href="https://sricharan7113.github.io/Shopline/" target="_blank_">
                        <button className="btn">
                            <div className="Card" id="Card">
                                <img src={ShoplineImg} className="ProjectImg" id="ProjectImg"></img>
                                <p>Shopline</p>
                            </div>
                        </button>
                    </a>


                    <a href="https://sricharan7113.github.io/Susuki-Swift/" target="_blank_">
                        <button className="btn">
                            <div className="Card" id="Card">
                                <img src={Swift} className="ProjectImg" id="ProjectImg"></img>
                                <p>Susuki Swift</p>
                            </div>
                        </button>
                    </a>


                    <a href="https://sricharan7113.github.io/Stone-Paper-Scissors/" target="_blank_">
                        <button className="btn">
                            <div className="Card" id="Card">
                                <img src={RockPaperScissors} className="ProjectImg" id="ProjectImg"></img>
                                <p>Rock-Paper-Scissors </p>
                            </div>
                        </button>
                    </a>

                    <a href="https://sricharan7113.github.io/Tic-Tac-Toe/" target="_blank_">
                        <button className="btn">
                            <div className="Card" id="Card">
                                <img src={TicTacToe} className="ProjectImg" id="ProjectImg"></img>
                                <p>Tic-Tac-Toe</p>
                            </div>
                        </button>
                    </a>

                    <a href="https://sricharan7113.github.io/To-Do/" target="_blank_">
                        <button className="btn">
                            <div className="Card" id="Card">
                                <img src={ToDo} className="ProjectImg" id="ProjectImg"></img>
                                <p>To-Do</p>
                            </div>
                        </button>
                    </a>

                    <a href="https://github.com/Sricharan7113" target="_blank_">
                        <button className="btn">
                            <div className="Card" id="Card">
                                <img src={More} className="ProjectImg" id="ProjectImg"></img>
                                <p>More</p>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Project;