import Calculator from "./../images/HiTechCalculator.png";
import Marquee from "react-fast-marquee"

import "./projects.css";



export default function Projects() {

    const handleMouseOver = (e) => {
        e.currentTarget.classList.add('paused'); // Pause animation
    };

    const handleMouseOut = (e) => {
        e.currentTarget.classList.remove('paused'); // Resume animation
    };

    return(
        <>

        {/* <h1>Projects</h1> */}
        

        <div className="Projects">
            <Marquee pauseOnHover speed={200}>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img className="calculator" src={Calculator} alt="HiTech Calculator" />
            </a>
         

    


            </Marquee>
            {/* <marquee behavior="scroll" direction="left" scrollamount="25" onMouseOver={this.stop} onMouseOut={this.start} > */}

        
            {/* N */}


        </div>
        
        
        
        </>
    )
}