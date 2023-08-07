import Avatar from "./Images/Avatar.png";
import Phone from "./Images/Phone.png";
import Location from "./Images/Location.png";
import Instagram from "./Images/Instagram.png";
import Mail from "./Images/Mail.png";
import Linkedin from "./Images/Linkedin.png";
import Github from "./Images/Github.png";
import Header from "./Header";

function Footer() {
    return (
        <div>
            <Header></Header>
            <div className="FooterContainer">

                <h1 className="Heading"> Contact Me </h1>
                <div className="Footer" id="Footer">
                    <div className="FooterDetails" id="FooterDetails">
                        <div className="Contact" id="Contact">
                            <img src={Avatar} alt="Avatar" width={40} className="ContactImg" />
                            <p>Sricharan N</p>
                        </div>

                        <div className="Contact" id="Contact">
                            <img src={Phone} alt="Phone" width={40} className="ContactImg" />
                            <p>+91 8220568903</p>
                        </div>

                        <div className="Contact" id="Contact">
                            <img src={Location} alt="Location" width={40} className="ContactImg" />
                            <p>Chennai</p>
                        </div>
                    </div>

                    <form action="https://formsubmit.co/sricharannandhakumaran@gmail.com" method="POST" onSubmit={MailSubmited} className="ContactForm" id="ContactForm">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://mail.google.com/mail/u/0/#inbox" />
                        <input type="hidden" name="_subject" value="🎉You Have Recieved a Feedback For Your Portfolio"></input>
                        <input type="text" name="Name" required className="Input" placeholder="Name" />
                        <input type="email" name="Email" required className="Input" placeholder="Email" />
                        <textarea className="Message" name="Message" required placeholder="Feedbacks..." />
                        <button type="submit" className="FeedbackSubmit" >Send</button>
                    </form>

                </div>
                <div className="FollowLinks" id="FollowLinks">
                    <a href="https://www.instagram.com/charan_photography7113/" target="_blank_"><img src={Instagram} alt="Instagram" width={40} className="FooterLinkImg"></img></a>
                    <a href="mailto:sricharannandhakumaran@gmail.com" target="_blank_"><img src={Mail} alt="Mail" width={40} className="FooterLinkImg"></img></a>
                    <a href="https://www.linkedin.com/in/sricharan-nanthakumaran/" target="_blank_"><img src={Linkedin} alt="Linkedin" width={40} className="FooterLinkImg"></img></a>
                    <a href="https://github.com/Sricharan7113" target="_blank_"><img src={Github} alt="Github" width={50} className="FooterLinkImg  FooterLinkImgGithub"></img></a>
                </div>
            </div>
        </div>
    );
}

function MailSubmited() {
    alert("Thanks for your Feedback..");
}
export default Footer;
