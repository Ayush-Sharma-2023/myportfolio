import "./bannerStyle.css";
import photo from "../images/profile.jpg"
// import { CiLinkedin } from "react-icons/ci";
import { LiaLinkedin } from "react-icons/lia";






import { FaGithub } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";




export default function banner(){

    const openLinkedin = () => {
        window.open('https://www.linkedin.com/in/ayush-sharma-39a232256/','_blank');

    };

    const openGithub = () => {
        window.open('https://github.com/Ayush-Sharma-2023','_blank');
    };

    const openCodechef = () => {
        window.open('https://www.codechef.com/users/ayush_sharma32','_blank');
    };

    return(
        <>
        <div className="banner">
            <div className="profilePic">
            <img className="profile-pic" src={photo} alt="" />

            </div>
            <div className="text">

            <div className="title">Ayush Sharma</div>
            <div className="subtitle">Experienced Frontend Developer  In React</div>
            </div>

            <div className="icons">
                <ul className="iconlist">
                    
                    <li className="iconitem" onClick={openLinkedin}> <LiaLinkedin/> </li>
                    <li className="iconitem" onClick={openGithub}> <FaGithub/></li>
                    <li className="iconitem" onClick={openCodechef}><SiCodechef/></li>
                </ul>
            </div>
        

        </div>
        
        </>
    )

}