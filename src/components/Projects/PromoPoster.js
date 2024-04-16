import { Container, Row, Col } from 'react-bootstrap';
import limon from "../../Assets/Projects/tea/limons.png";
import lemon from "../../Assets/Projects/tea/lemon.png";

function PromoPoster() {
    return (
        <Container>
            <Row style={{ paddingTop: 50 }} className='project-row-1'>
                <Col>
                    <img src={lemon} className="img-fluid" alt="Poster" />
                </Col>
                <Col>
                    <p>
                        This was a submission for the promotional poster design challenge of the multimedia content
                        production course. The prompt was to make a poster for any kind of product.
                    </p>
                    <p>
                        When deciding what to pick for my ad I was thinking of some kind of beverage that could have
                        a summer-ish, friendly and warm feel. I did some researching for ads with that type of vibe
                        but couldn't really think of anything to create and I ended up switching to a more mature
                        water brand and eventually switched to a tea brand.
                        I saw this pretty png of a lemon tea and decided to make an advertisement for it.
                    </p>

                </Col>
            </Row>

            <h1 style={{ paddingBottom: 20, textAlign: 'left' }} className="projects-title">Approach</h1>
            <Row className='project-row-1'>
                <Col>
                    <p>
                        I wanted to incorporate warmth and a more raw setting to recreate that summer day
                        feeling that I was looking for earlier, to enhance the freshness of the tea.
                        At first I tried with a tea plantation which ended up looking like every other tea
                        advertisement, but worse. But then I found a better one:
                    </p>
                    <p>
                        I thought it was perfect as it looked like an orchard, and could fit the bottle nicely
                        in the middle. It already had the lemons so I could work with that, even switch some
                        for other object I wanted to have.
                        This was the case with the honey picture that I found.
                    </p>
                </Col>
                <Col>
                    <figure>
                        <img src={limon} className="img-fluid" alt="lemon image" />
                        <figcaption className='fig-caption'>The lemon in question</figcaption>
                    </figure>
                </Col>
            </Row>

         
            

            <Row className='project-row-1'>
                
                    <p>
                        After having all of this it was a matter of removing backgrounds and making the
                        composition of the objects. In order to make it more realistic I also added some
                        shadows here and there.
                    </p>
                    <p>
                        After this part this was the result:
                    </p>
                
                    <figure>
                        <img src={lemon} className="img-fluid" alt="lemon image" />
                        <figcaption className='fig-caption'>Final Poster</figcaption>
                    </figure>
                
                <p>Finally, to make it look like a real add I added a catchphrase as well as the brand logo and slogan.</p>
            </Row>







        </Container>
    )
}
export default PromoPoster;