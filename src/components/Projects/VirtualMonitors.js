import { Container, Row, Col } from 'react-bootstrap';
import armonitors from "../../Assets/Projects/armonitors/ARmonitors.png";
import capture from "../../Assets/Projects/armonitors/Capture.PNG";
import capture1 from "../../Assets/Projects/armonitors/Capture1.PNG";
import capture2 from "../../Assets/Projects/armonitors/Capture2.PNG";
import capture3 from "../../Assets/Projects/armonitors/Capture3.PNG";
import capture4 from "../../Assets/Projects/armonitors/Capture4.PNG";
import capture5 from "../../Assets/Projects/armonitors/Capture5.PNG";
import capture6 from "../../Assets/Projects/armonitors/Capture6.PNG";
import capture7 from "../../Assets/Projects/armonitors/Capture7.PNG";
import capture8 from "../../Assets/Projects/armonitors/Capture8.PNG";
import capture9 from "../../Assets/Projects/armonitors/Capture9.PNG";
import capture10 from "../../Assets/Projects/armonitors/Capture10.PNG";
import sketch from "../../Assets/Projects/armonitors/sketches2.png";





function ProjectPage2() {
    return (
        <Container>
            <Row style={{ paddingTop: 50 }} className='project-row-1'>
                <Col>
                    <img src={armonitors} className="img-fluid" alt="AR monitors app" />
                </Col>
                <Col>
                    <p>
                        In this project an Augmented reality approach was thought for implementing virtual monitors
                        and explore wether this could constitute a viable way to replace the standard physical
                        monitor setups through the construction of a high fidelity prototype. The
                        potential of virtual monitors as a feasable way of substituing physical monitors if a
                        real mirror of the OS is used. However, the current state-of-the-art devices/headsets
                        are big and bulky, which can be a barrier for the widespread usage of such applications,
                        as they would be difficult to carry and could be awkward in more public spaces.
                        In the future these devices are expected to be the most inconspicuous as possible
                        for a more clean and seamless look, easily integrating these pieces of technology
                        into everyday life.
                    </p>
                </Col>

            </Row>

            <h1 style={{ paddingBottom: 20, textAlign: 'left' }} className="projects-title">Vision</h1>
            <Row className='project-row-2'>
                <p>
                    The idea behind this project was to use an optical head mounted device and wireless mouse
                    to interact with a virtual version of your device's screen to perform tasks on a more
                    customized resolution, with one or more instances of the interface and adaptable to
                    any location or situation.
                </p>
                <p>
                    You would need a physical marker to serve as a target to position the virtual screen.
                    It would not replace your device's screen but it would rather serve as an enhancement
                    that allows you to either do more difficult tasks or simply increase the quality and
                    comfort when using your phone.
                </p>
                <p>
                    Thus, the vision behind the research was to <b className="purple">enhance the quality of life with more screen
                        real estate, without needing more physical devices</b>, bringing improvements to mobility users as
                    well as office users with small devices.
                </p>
                <p>This work was inspired by the paper  "Do we still need physical monitors? An evaluation
                    of the usability of AR virtual monitors for productivity work"(Leonardo Pavanatto, et
                    al., 2021)</p>

                    
                    <figure>
                    <img src={sketch} className="img-fluid" alt="wireframe" />
                        <figcaption className='fig-caption'>System wireframe</figcaption>
                    </figure>
            </Row>

            <h1 style={{ paddingBottom: 20, textAlign: 'left' }} className="projects-title">Approach</h1>
            <Row className='project-row-1'>
                <h2>Interaction Techniques</h2>
                <Col>
                    <p>
                        The virtual monitor accepts mouse input for interacting with the entirety
                        of the app's elements. At first head gaze was implemented and explored but
                        was replaced by mouse input as this was easier to control and required less
                        head movement. It also made the user less prone to accidental clicks and made
                        the selection of buttons more intuitive.
                    </p>
                </Col>
                <Col>
                    <figure>
                        <img src={capture2} className="img-fluid" alt="mouse input" />
                        <figcaption className='fig-caption'>Mouse Input</figcaption>
                    </figure>
                </Col>
            </Row>

            <Row className='project-row-1'>
                <h2>User Interfaces</h2>
                <Col>
                    <p>
                        When the virtual monitor is started, it shows the main menu with buttons for each
                        app implemented as well as a date bar on the top left corner.
                    </p>
                    <p>
                        The screen has a solid dark color to partially occlude the user's surroundings to
                        achieve better visibility.
                    </p>
                    <p>
                        The interface was made simple for a more easy and intuitive usage.
                        Apart from the buttons, it has overall flat monochrome colors to not overwhelm
                        the user while using it, as it is an appendix to a working setup.
                    </p>
                    <p>
                        The apps implemented were chosen to provide a good and efficient work environment.
                        These include the everyday use calculator, notepad, weather, file browser, video
                        and audio players, and a messaging/call app.
                    </p>
                    <p>
                        The app buttons have icons that are standard as to be intuitive for the user what is the app
                        they're opening, as the name was omitted for the poor readability of the text.
                        Upon opening any of the apps the style is very similar for consistency purposes. The app opens in the form
                        of a tab that has the app name as well as a button for closing said app at the top bar,
                        so that the user knows what app is open and how to get back to the main menu.
                    </p>
                    <p>
                        At the bottom of the screen were positioned buttons to control the screen's size
                        and transparency, as well as a button for hiding/unhiding the screen, as they are features
                        that aren't used frequently and shouldn't be accidentally activated.
                    </p>
                    <p>
                        The buttons don't have the distinctive 3D look of a button, this was not chosen for stylistic purposes,
                        instead, the interactable elements have a different color(purple).
                        From the main menu, the user is able to select from 7 different apps: weather,
                        calculator, video player, audio player, notepad, phone, and file browser.
                    </p>
                </Col>
                <Col>
                    <figure>
                        <img src={capture1} className="img-fluid" alt="Main Menu" />
                        <figcaption className='fig-caption'>Main Menu</figcaption>
                    </figure>
                    <figure>
                        <img src={capture3} className="img-fluid" alt="Multiple displays" />
                        <figcaption className='fig-caption'>Multiple displays</figcaption>
                    </figure>
                </Col>
            </Row>


            <Row className='project-row-1'>
                <h2>Setup</h2>
                <Col>
                    <p>
                        The app classifies as a See-through Augmented Reality virtual interface and thus an
                        Optical Head-mounted Display (OHMD) is needed, in this case the Aryzon MR Original
                        Cardboard Headset.
                    </p>
                    <p>
                        The computer was used to implement and build the project, in this case Unity game engine
                        was used with editor version 2020.3.24f1 with Aryzon and ARFoundation SDKs.
                    </p>
                    <p>
                        The app was made for the Android OS so an Android device is needed for running the project.
                        To build the app on the smartphone it requires a cable for connecting it to the computer.
                        Due to Aryzon API constraints Android versions lower than 11 may lead to calibration problems.
                    </p>
                    <p>
                        A mouse is needed as it is the chosen input device. Because the app runs on the phone,
                        a bluetooth mouse is preferred but as one wasn't available, it was opted for a wireless
                        mouse connected by OTG cable to the phone.
                    </p>
                    <p>
                        Finally, the virtual screens are projected onto physical targets so printed markers
                        were also needed in order to achieve this.
                    </p>
                </Col>
                <Col>
                    <figure>
                        <img src={capture} className="img-fluid" alt="Aryzon Headset" />
                        <figcaption className='fig-caption'>Aryzon Headset</figcaption>
                    </figure>
                </Col>
            </Row>


            <Row className='project-row-1'>
                <h2>Tasks</h2>
                <Row>
                    <p>
                        The app has a virtual UI that mimics an Operative System so you can interact with it as
                        you would with any standard app and feature that you possess on any other smart device.
                        It would just be an addition of your smartphone/computer/tablet setup that's projected
                        on top of a target marker as a virtual screen.
                        So a few examples of tasks are: contact or message people, watch videos or photos,
                        listen to music, write notes, check the weather or resize and change the transparency
                        of the screen.
                    </p>
                </Row>

                <Row>
                    <Col>
                        <figure>
                            <img src={capture4} className="img-fluid" alt="Aryzon Headset" />
                            <figcaption className='fig-caption'>PDF Reader</figcaption>
                        </figure>
                        <figure>
                            <img src={capture5} className="img-fluid" alt="Aryzon Headset" />
                            <figcaption className='fig-caption'>Calculator</figcaption>
                        </figure>
                        <figure>
                            <img src={capture6} className="img-fluid" alt="Aryzon Headset" />
                            <figcaption className='fig-caption'>Weather</figcaption>
                        </figure>
                        <figure>
                            <img src={capture7} className="img-fluid" alt="Aryzon Headset" />
                            <figcaption className='fig-caption'>Music Player</figcaption>
                        </figure>
                    </Col>
                    <Col>
                        <figure>
                            <img src={capture8} className="img-fluid" alt="Aryzon Headset" />
                            <figcaption className='fig-caption'>Contacts</figcaption>
                        </figure>
                        <figure>
                            <img src={capture9} className="img-fluid" alt="Aryzon Headset" />
                            <figcaption className='fig-caption'>Video Player</figcaption>
                        </figure>
                        <figure>
                            <img src={capture10} className="img-fluid" alt="Aryzon Headset" />
                            <figcaption className='fig-caption'>Notepad</figcaption>
                        </figure>
                    </Col>
                </Row>
            </Row>

            <Row className='project-row-1'>
                <h2>Results</h2>
                <Row>
                    <p>
                        The outcome of the virtual user interface was according to expectations,
                        despite being a place holder OS that mimics a smartphone/computer's apps and features.
                        It recognizes the markers and projects the screen without problems most of the times,
                        the mouse input is very accurate and allows for quick and precise interactions.
                        In some rare cases, when recognizing a target it projects more than one instance of
                        the virtual screen on top of it, which makes it difficult to interact with the different buttons.
                    </p>
                    <p>
                        There are also some limitations regarding the software used that are beyond my control,
                        mostly in terms of calibration and target recognition, because the version used was being
                        adapted to have it's own calibration feature but sadly wasn't published yet when app was developed.
                    </p>
                    <p>
                        The app was made for the Android OS so an Android device is needed for running the project.
                        To build the app on the smartphone it requires a cable for connecting it to the computer.
                        Due to Aryzon API constraints Android versions lower than 11 may lead to calibration problems.
                    </p>
                    <p>
                        The fact that a wireless mouse was used as an input device simplifies the amount of clutter
                        around the head mounted device that is already a bit bothersome and not very comfortable to wear,
                        it is also the best type of device to interact with a 2D interface in a 3D environment.
                    </p>
                    <p>
                        As said above, it's undeniable that using a big OHMD like the Aryzon headset on your daily life
                        is not ideal and most people would rather just use their usual devices, so if in the future
                        it could be reduced to a simple pair of glasses it would make it more appealing to the general
                        audience as a viable and desirable product.
                    </p>
                    <p>
                        It still maintains most of its versatility and adaptability that it was predicted to have,
                        though because of its calibration and target recognition issues some hefty markers had to be made,
                        which retract a bit from the original idea.
                    </p>
                </Row>

            </Row>



        </Container>
    )
}
export default ProjectPage2;