import "./bannerStyle.css";
import photo from "./profile.jpg"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";




export default function banner(){

    return(
        <>
        <div className="banner">
            <div className="profilePic">
            <img src={photo} alt="" />

            </div>
            <div className="text">

            <div className="title">Ayush Sharma</div>
            <div className="subtitle">Experienced Frontend Developer  In React</div>
            </div>

            <div className="icons">
                <ul className="iconlist">
                    
                    <li className="iconitem"> <CiLinkedin/> </li>
                    <li className="iconitem"> <FaGithub/></li>
                    <li className="iconitem"><SiCodechef/></li>
                </ul>
            </div>
        

        </div>
        
        </>
    )

}