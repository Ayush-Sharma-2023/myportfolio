// import "../CSS_files/navbar.css";
// import Home from './home';
// import Projects from './projects';
// import Experience from "./experience";
// import Certificates from "./certificates";
// import React, { useRef } from 'react';

// export default function Body() {
//     const homeRef = useRef(null);
//     const projectsRef = useRef(null);
//     const experienceRef = useRef(null);
//     const certificatesRef = useRef(null);

//     const handleNavItemClick = (ref) => {
//         ref.current.scrollIntoView({ behavior: 'smooth' });
//     };

//     return (
//         <>
//             <div className="box">
//                 <div className="navbar">
//                     <ul className="navlist">
//                         <li className="navitem" onClick={() => handleNavItemClick(homeRef)}>Home</li>
//                         <li className="navitem" onClick={() => handleNavItemClick(projectsRef)}>Projects</li>
//                         <li className="navitem" onClick={() => handleNavItemClick(experienceRef)}>Experience</li>
//                         <li className="navitem" onClick={() => handleNavItemClick(certificatesRef)}>Certificates</li>
//                     </ul>
//                 </div>

//                 <div className="content">
//                     <div ref={homeRef}>
//                         <Home />
//                     </div>
//                     <div ref={projectsRef}>
//                         <Projects />
//                     </div>
//                     <div ref={experienceRef}>
//                         <Experience />
//                     </div>
//                     <div ref={certificatesRef}>
//                         <Certificates />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


// Navbar.js


import React from 'react';
import "../CSS_files/navbar.css";

export default function Navbar({ onNavItemClick }) {
    return (
        <div className="navbar">
            <ul className="navlist">
                <li className="navitem" onClick={() => onNavItemClick('home')}>Home</li>
                <li className="navitem" onClick={() => onNavItemClick('projects')}>Projects</li>
                <li className="navitem" onClick={() => onNavItemClick('experience')}>Experience</li>
                <li className="navitem" onClick={() => onNavItemClick('certificates')}>Certificates</li>
            </ul>
        </div>
    );
}
