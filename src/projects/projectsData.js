import javafxProject from "../assets/javafx.png";
import robotProject from "../assets/robotCollage.png";
import hospitalProject from "../assets/loginPage.jpeg";
import portfolioWebsite from "../assets/portfolio700px.png";
import gitIcon from "../assets/code-branch.png";

const projects = {
    1: {
        title: "Portfolio Website - Fall 2023",
        image: portfolioWebsite,
        description: (
            <>
                <p>
                    Personal website developed to display my experience, skills, and achievements while exercising my web development skills.
                
                    <a href="#popup-box" style={{marginLeft: '0.5rem'}}>More Details</a>
                    <div id="popup-box" class="modal">
                        <div class="content">
                            <p>Independent ongoing project started in October of 2023, using GitHub for code management and Netlify for deployments.
                                Coding done in Visual Studio Code for Mac.
                                 <a href="https://github.com/oonnie/portfolio-app.git" target="_blank">
                                    <img id="git" src={gitIcon}></img>
                                </a>
                            </p>
                            <a href="#" class="box-close"> × </a>
                        </div>
                    </div>
                </p>
                <h5>Skills Exercised: JavaScript, HTML, CSS, React, GitHub, EmailJS</h5>
            </>
        ),
        course: "",
    },
    2: {
        title: "Design of a Telepresence Robot - Spring 2023",
        image: robotProject,
        description: (
            <>
                <p> 
                    Embedded, full lifecycle group project to design & implement a telepresence robot to be used 
                    as assistant for remote work at the Operator Performance Laboratory in Iowa City, IA. 
                    
                    <a href="#popup-box" style={{marginLeft: '0.5rem'}}>More Details</a>
                    <div id="popup-box" class="modal">
                        <div class="content">
                            <p> My team of 5 and I met with the customer on a weekly basis to define, refine, or assess requirements
                                throughout the course of a semester. We were responsible for sketching ideas and forming a design, 
                                carefully selecting materials and technologies to use, as well as designing the software to control the robot remotely
                                - all in accordance with the given requirements and constraints. My main responsibility was 
                                spearheading the software portion. I constructed a software architecture diagram and developed the login and 
                                control page interfaces. I also helped develop the logic for variable speed control using a virtual joystick 
                                and integrating the position of the joystick with the motor controller’s (RoboClaw) movement libraries. 
                                The code was written on a Raspberry Pi held within the robot. We presented our completed project to a panel 
                                of judges at the end of the semester and earned an A grade. </p>
                            <a href="#" class="box-close"> × </a>
                        </div>
                    </div>
                </p>
                <h5>Skills Exercised: JavaScript, HTML, CSS, Python, RoboClaw, Raspberry Pi, Engineering Design</h5>
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

                    <a href="#popup-box" style={{marginLeft: '0.5rem'}}>More Details</a>
                    <div id="popup-box" class="modal">
                        <div class="content">
                            <p> 
                                I primarily helped with database design and the frontend portion, as well as took on the project manager role. 
                                I led and documented all team meetings, noting my group members' strengths and weaknesses to best assign weekly tasks.
                                We met on a weekly basis and followed the Agile methodology to successfully execute the project.
                                We chose our tech stack (ReactJS, NodeJS, Express, and MySQL) based on ease of use and learnability, in accordance with guidelines set by the professor.
                                We utilized SonarQube for continual code inspection and GitLab for source library control, continual integration, and defect
                                tracking. For automated testing, we complied with Jest.
                            </p>
                            <a href="#" class="box-close"> × </a>
                        </div>
                    </div>
                </p>
                <h5>Skills Exercised: JavaScript, MySQL, React, Node, Express, GitLab, Agile</h5>
            </>
        ),
        course: "Course: Fundamentals of Software Engineering"
    },
    4: {
        title: "JavaFX Word Game - Fall 2022",
        image: javafxProject,
        description: (
            <>
                <p> 
                    JavaFX word game application with multi-threading and networking capabilities, as well as gameplay option (solo or multiplayer).
                    Group effort to develop the game in a 72-hour period.
                    <a href="#popup-box" style={{marginLeft: '0.5rem'}}>More Details</a>
                    <div id="popup-box" class="modal">
                        <div class="content">
                            <p>My team and I worked together, in pair programming-like environment, to develop an interactive GUI game in Java.
                                When running the application, the user is prompted with a welcome screen and their choice of gameplay (solo or multiplayer).
                                The user then plays the game and earns points according to given rules. Once the 30 second game concludes, the user can view
                                the leaderboard and choose to play again or exit. PostgreSQL was utilized to store user data and manage the leaderboard and testing
                                was done in compliance with JUnit. 
                            </p>
                            <a href="#" class="box-close"> × </a>
                        </div>
                    </div>
                </p>
                <h5>Skills Exercised: Java, SQL (PostreSQL), JUnit Testing, GitLab, Rapid Development</h5>
            </>
        ),
        course: "Course: Introduction to Software Design"
    }
}

export default projects;