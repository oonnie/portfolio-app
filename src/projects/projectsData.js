import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import robotProject from "../assets/robotCollage.png";
import hospitalProject from "../assets/loginPage.jpeg";
import robot from "../assets/robot.png";
import portfolioWebsite from "../assets/portfolioWebsite.jpg";

const projects = {
    1: {
        title: "Portfolio Website - Fall 2023",
        image: portfolioWebsite,
        description: (
            <>
                <p>Personal website developed and deployed by myself to display my experience and achievements while exercising my web development skills.</p>
                <h5>Skills Exercised: JavaScript, HTML, CSS, React, GitHub</h5>
            </>
        ),
        course: ""
    },
    2: {
        title: "Design of a Telepresence Robot - Spring 2023",
        image: robotProject,
        description: (
            <>
                <p> 
                    Embedded, full lifecycle group project to design & implement a telepresence robot to be used as assistant for remote work at the Operator Performance Laboratory in Iowa City, IA.
                </p>
                <h5>Skills Exercised: JavaScript, HTML, CSS, Python, Flask, RoboClaw, Engineering Design</h5>
            </>
        ),
        course: "Course: ISE Senior Design"
    },
    3: {
        title: "Hospital Management System - Spring 2023",
        image: hospitalProject,
        description: (
            <>
                <p> 
                    Comprehensive hospital management web application offering portals for all roles (doctor, nurse, patient, admin) with varying access.
                    Developed in team of 3 over the course of a semester.
                </p>
                <h5>Skills Exercised: JavaScript, MySQL, React, Node, Express, GitHub, Agile</h5>
            </>
        ),
        course: "Course: Fundamentals of Software Engineering"
    },
    4: {
        title: "JavaFX Word Game - Fall 2022",
        image: project3,
        description: (
            <>
                <p> 
                    JavaFX word game application with multi-threading and networking capabilities, as well as gameplay option (solo or multiplayer).
                    Group effort to develop the game in a 72-hour period.
                </p>
                <h5>Skills Exercised: Java, SQL (PostreSQL), JUnit Testing, GitHub, Rapid Development</h5>
            </>
        ),
        course: "Course: Introduction to Software Design"
    }
}

export default projects;