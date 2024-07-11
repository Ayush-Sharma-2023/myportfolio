import "../CSS_files/navbar.css";
import Home from './home';
import Projects from './projects';
import Experience from "./experience";
import Certificates from "./certificates";
import React, { useState } from 'react';


export default function Body(){

    
        const [activeSection, setActiveSection] = useState('Home'); // Default active section
    
        const handleNavItemClick = (section) => {
            setActiveSection(section);
        };


    return(
        <>
        <div className="box">

<div className="navbar">
    <ul className="navlist">
        <li className="navitem" onClick={()=> handleNavItemClick('Home') }  >Home</li>
        <li className="navitem" onClick={()=> handleNavItemClick('Projects')}>Projects</li>
        <li className="navitem" onClick={()=> handleNavItemClick('Experience')}>Experience</li>
        <li className="navitem" onClick={()=> handleNavItemClick('Certificates')}>Certificates</li>
    </ul>

</div>

<div className="content">
                {activeSection === 'Home' && <Home />}
                {activeSection === 'Projects' && <Projects />}
                {activeSection === 'Experience' && <Experience />}
                {activeSection === 'Certificates' && <Certificates />}
            </div>


</div>
        
        
        </>
    );
}