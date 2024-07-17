import React, { useRef } from 'react';
import Navbar from './navbar';
import Home from './home';
import Projects from './projects';
import Experience from "./experience";
import Certificates from "./certificates";

export default function Body() {
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const certificatesRef = useRef(null);

    const handleNavItemClick = (section) => {
        const refs = {
            home: homeRef,
            projects: projectsRef,
            experience: experienceRef,
            certificates: certificatesRef
        };
        refs[section].current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Navbar onNavItemClick={handleNavItemClick} />

            <div className="content">
                <div ref={homeRef}>
                    <Home />
                </div>
                <div ref={projectsRef}>
                    <Projects />
                </div>
                <div ref={experienceRef}>
                    <Experience />
                </div>
                <div ref={certificatesRef}>
                    <Certificates />
                </div>
            </div>
        </>
    );
}
