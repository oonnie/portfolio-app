import document from "../assets/document.png";
import myResume from "../assets/krage-2023.pdf";

const subheadingsData = {
    1: [
        {
            title: "About Me",
            content: (
                <>
                <div class="dropdown">
                    <p>
                        Hi, I'm Annie Krage. 
                    </p> 
                    <p>
                        {/* I'm a recent graduate intending to pursue a career as a front-end or full stack software developer.  */}
                        If I had to describe myself in one word, it would be dynamic - I am continuously learning and propelling myself to have a 
                        range of knowledge, skills, and abilities. 
                    </p>
                    <p>
                        I traveled the world by myself for two years following high school, working 
                        various jobs or volunteering, before going on to engineering school at the University of Iowa. From my experience,
                        I've gathered a global perspective & unique problem solving skills.
                    </p>
                </div>
                <div class="resume-link">
                    <p>Resume:</p>
                    <a id="resume" href={myResume} download>
                        <img src={document} alt="W3Schools"/>
                    </a>
                </div>
                </>
            )
        }

    ],
    2: [ /* education */
        {
            title: "Bachelor of Science in Engineering ",
            content: (
                <>
                    <div class="dropdown">
                        <h4>University of Iowa 2019-2023</h4>
                        <h5 id="edu" class="firstItem">Major: Industrial & Systems Engineering</h5>
                        <h5 id="edu">Minor: Computer Science</h5>
                        <h6 id="edu">Focus area: Computer & Information Systems</h6>
                    </div>
                    <div class="dropdown1">
                        <p>My studies gave me a great range and foundation of knowledge. I learned methods to assess and optimize 
                            processes and systems, as well as computer science and software engineering fundamentals. I was also a
                            proud achiever of the Dean's List.
                        </p>
                    </div>
                </>
            )
        }

    ],
    3: [ /* work experience */
        {
            title: "Software Engineer Intern",
            content: (
                <> <div class="dropdown">
                    <h4>Summer 2022</h4>
                    <h5>Genova Technologies - Cedar Rapids, IA (Hybrid)</h5>
                    <p>
                        <ul>
                            <li>Object-Oriented Programming</li>
                            <li>Web Development</li>
                            <li>Mobile Development (iOS, Android)</li>
                            <li>Manual Testing</li>
                            <li>Agile/Scrum Methodology</li>
                            {/* <li>Worked on hybrid team to deliver consistent software updates for a client project</li>
                            <li>Quickly learned new languages and technologies to swiftly adapt to new environment and codebase</li>
                            <li>Implemented OOP to fix bugs and create new features on both the web and mobile platforms</li>
                            <li>Tested code using a simulator and external devices</li>
                            <li>Presented work to and received feedback from stakeholders on a biweekly basis</li> */}
                        </ul>
                    </p>
                    {/* <h5 id="last-line">Skills Learned: Angular, Bootstrap, Django, Swift, Kotlin/XML, Agile/Scrum, Jira, Bitbucket, Sourcetree,Confluence </h5> */}
                    </div>
                </>
            )
        },
        {
            title: "Waitress",
            content: (
                <> <div class="dropdown">
                    <h4>Summer 2019-2021</h4>
                    <h5>Maxwell's Beach Cafe - Okoboji, IA</h5>
                    <p>
                        <ul>
                            <li>Foresightedness</li>
                            <li>Fast-paced environment</li>
                            {/* <li>Ability to accept criticism</li> */}
                            <li>Active listening skills</li>
                            <li>Charisma</li>
                        </ul>
                    </p>
                    </div>
                </>
            )
        },
        {
            title: "Receptionist & Bartender",
            content: (
                <> <div className="dropdown">
                    <h4>Fall 2018-Spring 2019</h4>
                    <h5>The Lord Wolseley Hotel - Sydney, NSW (AUS)</h5>
                    <p>
                        <ul>
                            <li>Adaptability</li>
                            <li>Time Management</li>
                            <li>Inventory Management</li>
                            <li>Handling payments & foreign currency</li>
                        </ul>
                    </p>
                    </div>
                </>
            )
        }
    ],
};

export default subheadingsData;
