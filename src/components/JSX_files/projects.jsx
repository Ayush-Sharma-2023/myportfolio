import Calculator from ".././../images/HiTechCalculator.png";
import Marquee from "react-fast-marquee"
// npm run deploy
//use it


import "../CSS_files/projects.css";



export default function Projects() {

    

    return(
        <>
        

        <br /><br /><br /><br />
        

        <div className="Projects">
            <p className="title">My Projects</p>
            <Marquee pauseOnHover speed={200}>
            <a href="https://ayush-sharma-2023.github.io/HiTech-Calculator/" target="_blank" rel="noopener noreferrer">
            <img className="calculator" src={Calculator} alt="HiTech Calculator" />
            </a>
         

    


            </Marquee>
            {/* <marquee behavior="scroll" direction="left" scrollamount="25" onMouseOver={this.stop} onMouseOut={this.start} > */}

        
            {/* N */}


        </div>
        
        
        
        </>
    )
}