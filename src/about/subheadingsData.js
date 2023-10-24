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
                        I'm a recent graduate intending to pursue a career as a front-end or full stack software developer. 
                        If I had to describe myself in one word, it would be dynamic - I am continuously learning and propelling myself to have a 
                        range of knowledge, skills, and abilities. 
                    </p>
                    <p>
                        I traveled the world by myself for two years following high school, working 
                        various jobs or volunteering, before going on to engineering school at the University of Iowa. From my experience,
                        I've gathered a global perspective & unique problem solving skills.
                    </p>
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
                        <h4 id="education">University of Iowa 2019-2023</h4>
                        <h5 id="education">Major: Industrial & Systems Engineering</h5>
                        <h5 id="education">Minor: Computer Science</h5>
                        <h6 id="education">Focus area: Computer & Information Systems</h6>
                        <br></br>
                        <p>My studies gave me a great range and foundation of knowledge. I learned methods to assess and optimize 
                            processes/systems as well as computer science and software engineering fundamentals. I was also a
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
                            <li>Ability to accept criticism</li>
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
    4: [ /* volunteer work */
        {
            title: "English Teacher",
            content: (
                <> <div class="dropdown">
                    <h4>Fall 2017</h4>
                    <h5>IVHQ - Bali, Indonesia</h5>
                    <p>
                        <ul>
{/*                             <p>I was responsible for assembling daily lesson plans for my class of young Indonesian children, with the goal
                                of teaching them the basics of the English language. 
                                I quickly learned elementary Bahasa Indonesian language and adapted to the local culture.
                                5 days per week, I instructed a classroom of young children with occasional help from an interpretor. I had to become very creative
                                with nonverbal communication to bridge the language barrier and successfully communicate with the students.</p> */}
                            <li>Adaptability</li>
                            <li>Creativity</li>
                            <li>Perseverance</li>
                            <li>Patience</li>
                        </ul>
                    </p>
                    </div>
                </>
            )
        },
        {
            title: "Special Olympics Dance Coach",
            content: (
                <> <div class="dropdown">
                    <h4>Spring 2014-2017</h4>
                    <h5>Special Olympics IA - Sioux City, IA</h5>
                    <p>
                        <ul>
                            <li>Leadership</li>
                            <li>Enthusiasm</li>
                            <li>Empathy</li>
                            <li>Persistence</li>
                        </ul>
                    </p>
                    </div>
                </>
            )
        },
    ]
};

export default subheadingsData;
