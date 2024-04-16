import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import checkapp from "../../Assets/Projects/checkapp/checkapp.png";
import check from "../../Assets/Projects/checkapp/check.png";
import features from "../../Assets/Projects/checkapp/features.png";
import lowtohigh from "../../Assets/Projects/checkapp/lowtohigh.png";
import lowtohigh2 from "../../Assets/Projects/checkapp/lowtohigh2.png";
import overview from "../../Assets/Projects/checkapp/overview.png";
import problem from "../../Assets/Projects/checkapp/problem.png";
import results from "../../Assets/Projects/checkapp/results.png";



function ProjectPage2() {
    return (
        <Container>
            <Row style={{ paddingTop: 50 }} className='project-row-1'>
                <Col>
                    <img src={checkapp} className="img-fluid" alt="check app" />
                </Col>
                
            </Row>

            <h1 style={{ paddingBottom: 20, textAlign: 'left' }} className="projects-title">Problem</h1>
            <Row className='project-row-2'>
                <p><b className="purple">Interaction Problem:</b> Interact with other people in the workplace
                    with the same speed and efficiency.</p>
                <p>
                    <b className="purple"> Question at the end of the research:</b>
                </p>
                <p> - Is there an improvement in performance and usability by creating a feature bundle
                    app co-designed with the user? </p>
            </Row>


            <Row className='project-row-1'>
                <h2>Context</h2>
                <Col>
                    <p>
                        The project was co-designed with Alex, a woman with dysgraphia.
                        She works in a big corporation, where she needs to be able to quickly communicate in written form.
                        This means that her problem often gets in the way of her work. I wanted to help attenuate this problem.
                    </p>
                </Col>
                <Col>
                    <img src={check} className="img-fluid" alt="dysgraphia" />
                </Col>
            </Row>

            <Row className='project-row-1'>
                <h2>Project Overview</h2>
                <Col>
                    <p>
                        The project involved 3 mai sessions with the co-designer:
                    </p>
                    <p>
                        1st Session: Semi-structured interview to better understand her challenges/problems.
                    </p>
                    <p>
                        2nd Session: Observe Alex in her workplace. Brainstorming and Moscow Card Sorting
                    </p>
                    <p>
                        3rd Session: Prototyping and Qualitative Usability Testing with Alex.
                    </p>
                </Col>
                <Col>
                    <img src={overview} className="img-fluid" alt="project overview" />
                </Col>
            </Row>

            <Row className='project-row-1'>
                <h2>Problem Space</h2>
                <p>Exploring existing needs and issues</p>
                <Col>
                    <p style={{ fontWeight: 'bold' }}>
                        Problem Statement
                    </p>
                    <p>
                        Alexandra, a woman with <b className='purple'>dysgraphia</b>, needs to be able to <b className='purple'>write concisely for her work</b>
                        in order to create correct formal information that is shared with company-specific channels –
                        such as e-mails, presentations, and company chat.
                    </p>
                </Col>
                <Col>
                    <p style={{ fontWeight: 'bold' }}>
                        Procedure and Findings
                    </p>
                    <p>
                        <b className='purple'>Semi-structured interview. </b>
                        Initially thought it was dyslexia.
                        Ruled out Irlen Syndrome.
                        Found out it is dysgraphia.
                    </p>
                    <p>
                        At work <b className='purple'>types wrong frequently</b> even though she looks at keyboard when typing.
                    </p>
                </Col>
            </Row>

            <Row className='project-row-1'>
                <h2>Creating a Solution</h2>
                <p>Ideating the solution for the selected issues</p>
                <Col>
                    <p style={{ fontWeight: 'bold' }}>
                        Observing current typing process
                    </p>
                    <p>
                        Observed Alex in a work-at-home session while not in a meeting. Findings:
                    </p>
                    <p>
                        Types mostly while <b className='purple'>looking at keyboard </b>and only periodically looks at the screen.
                        Mostly <b className='purple'>runs text through Outlook </b>for e-mails, but in chat mostly doesn’t have time
                        to do that.
                    </p>
                </Col>

                <Col>
                    <p style={{ fontWeight: 'bold' }}>
                        Brainstorming
                    </p>
                    <p>
                        <b className='purple'>MoSCoW card sorting session</b>.
                        Main takeaways:
                        Wants an <b className='purple'>all-in-one tool </b>where she can disable and enable whichever features she needs at each point.
                    </p>
                    <p>
                        <b className='purple'>Needs to have:</b> learning autocorrection, speech-to-text, text-to-speech, usable in any app.
                    </p>
                    <p>
                        <b className='purple'>Could have:</b> haptic keyboard BUT possibility to disable.
                    </p>
                </Col>

            </Row>


            <Row className='project-row-1'>
                <h2>Final Prototype</h2>
                <p>Testing with co-designer and results</p>
                <img src={features} className="img-fluid" alt="features" />
                <Col>
                    <p style={{ fontWeight: 'bold' }}>
                        How?
                    </p>
                    <p>
                        <b className='purple'>Chat</b> with the co-designer on <b className='purple'>each step</b> of prototype creation to make
                        sure the system is usable for her.

                    </p>
                </Col>
                <Col>
                    <p style={{ fontWeight: 'bold' }}>
                        Methods to get results
                    </p>
                    <p>
                        How could we get results on the <b className='purple'>usability</b> of this app compared to the co-designer’s current system?

                    </p>
                    <p>
                        The answer is: <b className='purple'>usability testing</b>. Allows to get information on
                        <b className='purple'>how long</b> it took to do each task and
                        <b className='purple'>what the co-designer thought</b> about each section.
                    </p>
                    <p>
                        This granted results that could <b className='purple'>evaluate the usefulness</b> of the tool.
                    </p>
                </Col>
            </Row>

            <Row className='project-row-1'>
                <p style={{ fontWeight: 'bold' }}>
                    Results
                </p>
                <img src={lowtohigh} className="img-fluid" alt="low fidelity to high fidelity prototypes" />
                <img src={lowtohigh2} className="img-fluid" alt="low fidelity to high fidelity prototypes" />
                <img src={results} className="img-fluid" alt="test resuls" />
            </Row>

            <Row className='project-row-1'>
                <h2>Conclusions</h2>
                <Col>
                    <p>
                        The co-designer was <b className='purple'>very interested in getting statistics and logs of her errors</b>,
                        since she has access to similar logs related to her work performance through a
                        company tool.
                    </p>
                    <p>
                        Alex hoped for a tool that had <b className='purple'>easier access and faster performance</b> than those already available in 
                        the market, since for work she can’t spend around 20+20 seconds to activate and deactivate tools 
                        before and after meetings. <b className='purple'>The tests showed success in this field</b>.
                    </p>
                </Col>
                
            </Row>

        </Container>
    )
}
export default ProjectPage2;