import Calculator from "./../images/HiTechCalculator.png";
import Marquee from "react-fast-marquee"
// npm run deploy
//use it


import "./projects.css";



export default function Projects() {

    

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