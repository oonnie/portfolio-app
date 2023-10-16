import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";

const projects = {
    1: {
        title: "Design of a Telepresence Robot",
        image: project1,
        description: (
            <>
                <p> 
                    Designed and implemented a telepresence robot to be used in the Operator Performance Laboratory as an assistant for remote work.
                    Sketched designs and selected materials in accordance with given user & engineering requirements.
                    Developed a user-friendly interface for workers to remotely access the robot and move it using a virtual joystick.
                    ...
                </p>
            </>
        ),
        course: "ISE Senior Design"
    },
    2: {
        title: "Hospital Management System",
        image: project2,
        description: (
            <>
                <p> 
                    describe the project2 here 
                </p>
            </>
        ),
        course: "Fundamentals of Software Engineering"
    },
    3: {
        title: "JavaFX Word Game",
        image: project3,
        description: (
            <>
                <p> 
                    describe the project3 here 
                </p>
            </>
        ),
        course: "Introduction to Software Design"
    }
}

export default projects;