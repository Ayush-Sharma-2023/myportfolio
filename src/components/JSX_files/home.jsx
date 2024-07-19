// import '../CSS_files/home.css';
import "../CSS_files/tags.css";
// import photo from "../../images/profileIcon.jpg";
import style from "../CSS_files/home.module.css";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";


export default function home() {

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/ayush-sharma-39a232256/','_blank');
};

const openGithub = () => {
    window.open('https://github.com/Ayush-Sharma-2023','_blank');
};

const openCodechef = () => {
    window.open('https://www.codechef.com/users/ayush_sharma32','_blank');
};

  return (
    <>
      <div className="home">
        <h2>Test</h2>
        {/* <h1> Home</h1> */}

        <div className={style.container}>
          <div className="left">
            <p className={style.about}>
              {/* Hi I'm <br /> */}
              Ayush Sharma <br />
              <span className={style.FD}>Frontend Developer</span>
            </p>

            <p className={style.subAbout}>
            {/* My projects encompass both Frontend development and <br />Data Structures and Algorithms (DSA). <br />
            <br />   My Skills includes HTML, CSS, JS, React, Git */}
            Skilled in HTML, CSS, JavaScript, React, and Git.<br/> Experienced in frontend development and <br /> proficient in Data Structures and Algorithms (Java).
            <br /> <br /> Check out my profiles here
              
            
          
              
          
            </p>
            <div className={style.icons}>
            {/* <p className={style.profile}>My Profiles</p><br /> */}
                <ul className={style.iconlist}>
                    
                    <li className={style.iconitem} onClick={openLinkedin}> <LiaLinkedin/> </li>
                    <li className={style.iconitem} onClick={openGithub}> <FaGithub/></li>
                    <li className={style.iconitem} onClick={openCodechef}><SiCodechef/></li>
                </ul>
            </div>

            <a href="/Ayush_resume.pdf" download="Ayush_Sharma_CV.pdf">
            {/* <a href="/cv.pdf" download="Ayush_Sharma_CV.pdf" onClick={handleDownload}> */}
        <button>Download CV</button>
      </a>
            
            <button>Contact </button>
          </div>

          <div className="right">
            {/* <img className={style.profileIcon} src={photo} alt="" /> */}
            {/* <div className={style.profileIcon}></div> */}

            {/* ORBIT TEST */}
            <div className={style.solar}>
            <div className={style.vector}></div>

            <div className={style.orbit}>
              <div className={style.logo}></div>
            </div>

            <div className={style.orbit2}>
              <div className={style.logo2}></div>
            </div>
            <div className={style.orbit3}>
              <div className={style.logo3}></div>
            </div>
            <div className={style.orbit4}>
              <div className={style.logo4}></div>
            </div>
            <div className={style.orbit5}>
              <div className={style.logo5}></div>
            </div>
          </div>
            {/* ORBIT TEST ENDS */}
            {/* <span>ORBIT LOGO HERE</span> */}
          </div>
        </div>
      </div>
    </>
  );
}
