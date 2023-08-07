import Like from './Images/Like.png'
import Liked from './Images/Liked.png'
import Header from "./Header";
function Banner() {
    return (
        <div>
            <Header></Header>
            <div className="BannerDiv" id="BannerDiv">
                <div className="BannerDiscription" id="BannerDiscription">
                    <h3 className="HelloText" id="HelloText">
                        Hello, My Name is
                    </h3>
                    <h1 className="Name" id="Name">
                        <span className="SpanContent">Sricharan</span>
                    </h1>
                    <button className="LikeMe" id="LikeMe" onClick={LikedFn}>
                        <img src={Like} className='LikeBtn' id='LikeBtn'></img>
                        <h3 id="Click">Like!</h3>
                        <h3 id="Clicked">Liked!</h3>
                    </button>
                </div>


            </div>
        </div>
    )
}
function LikedFn() {

    document.getElementById("LikeBtn").src = Liked;
    document.getElementById("Click").style.display = 'none';
    document.getElementById("Clicked").style.display = 'block';
}

export default Banner;

