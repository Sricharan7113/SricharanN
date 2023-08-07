import { Link, useLocation } from 'react-router-dom';
function Header()
{
    return(
        <div className="Header" id="Header">
            <div className="Logo" id="Logo">
                <span className="SpanContent">Sricharan</span> Nanthakumaran
            </div>
            <div className="Navs" id="Navs">
                
                <Link to="/" class="Links"><button className="btn">Home</button></Link>
                <Link to="/About" class="Links"><button className="btn">About</button></Link>
                <Link to="/Projects" class="Links"><button className="btn">Projects</button></Link>
                <Link to="/Skills" class="Links"><button className="btn">Skills</button></Link>
                <Link to="/Contact" class="Links"><button className="btn">Contact</button></Link>
              
            </div>
            
        </div>
    )
}
export default Header;