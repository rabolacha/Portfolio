import { Container, Row, Col } from 'react-bootstrap';
import lucha from "../../Assets/Projects/luchador/luchador.png";
import lemon from "../../Assets/Projects/tea/lemon.png";

function LuchaDor() {
    return (
        <Container>
            <Row style={{ paddingTop: 50 }} className='project-row-1'>
                <Col>
                    <img src={lucha} className="img-fluid" alt="Poster" />
                </Col>
                <Col>
                    <p>
                        This was the game developed for the game design course, which had the theme 'Mask'.
                        In this project I was responsible for doing the game art, level design, with some
                        game logic coding here and there.
                    </p>
                    <p>
                        Imagine yourself, a buffed luchador, who just woke up from your beauty sleep.
                        Everything seems great. You reach for your mask, which you can’t leave your house
                        without when suddenly, it is not there. While trying not to cry, you search the
                        entire house for it. In your kitchen table there’s a note saying, “Catch me.”.
                        You immediately know who did it. Your entire body shivers. Will you be strong enough
                        to defeat it? Your story begins now.
                    </p>

                </Col>
            </Row>

            <h1 style={{ paddingBottom: 20, textAlign: 'left' }} className="projects-title">Design Goals</h1>
            <Row className='project-row-1'>
                <Col>
                    <p>
                        <b className="purple">Challenging and thrilling</b> - The boss encounters and platform challenges are difficult,
                        so it will take a bit of skill to be able to reach your goal.
                    </p>
                    <p>
                        <b className="purple">Rewarding</b> - Every now and then new masks will appear and introduce you to new
                        abilities and powers, making you feel more powerful. Playing your cards right while
                        getting compliments can also increase the buffs you can get.
                    </p>
                    <p>
                        <b className="purple">Light-hearted humor</b> - You feel sympathy towards the luchador, but also laugh at the
                        same time. The story has a silly premise and the goal itself even more. Interacting
                        with the characters will certainly give you a lot of fun.
                    </p>
                </Col>
            </Row>

            <h1 style={{ paddingBottom: 20, textAlign: 'left' }} className="projects-title">Unique Selling Points</h1>
            <Row className='project-row-1'>
                <p>
                    <b className="purple">Compliment juice</b>: This mechanic is a minigame itself.
                    Don’t get too hyped while catching compliments.
                    They for sure give you the boost you need, but fishing for compliments is not cool.
                    Try not to be too obvious while doing it. Adding into this, you can also pick the mask
                    that gets the most attention of the people around you, which works as a multiplier for
                    the compliment juice you can get.

                </p>

            </Row>

            <h1 style={{ paddingBottom: 20, textAlign: 'left' }} className="projects-title">Game world</h1>
            <Row className='project-row-1'>
                <h2>Story and setting</h2>
                <Col>
                    <p>
                        The player dresses the body of a buffed Mexican luchador, who’s demoralized about his lost mask. For a Mexican luchador a mask is everything, is a great part of his identity. Without his mask he is nothing, just another fighter in the ring.
                    </p>
                    <p>
                        Beginning at his home, he’ll have to adventure himself through many ambients,
                        who may give the full Mexican feeling, with villages or more arid areas, or not,
                        such as mystic caves. Along the way he will find new masks. The masks may give him special
                        powers but they’re not his mask and despite feeling more powerful he still feels empty inside.
                        To cope with this feeling of melancholy he will need the moral support of other characters
                        he finds throughout his journey.
                    </p>
                    <p>
                        His ultimate goal is to retrieve his beloved mask.
                    </p>
                </Col>
            </Row>

            <Row className='project-row-1'>
                <h2>Maps, Levels and Challenges</h2>
                <Col>
                    <p>
                        The map settings are very diverse. They range from settings we would find in real life 
                        such as deserts, mountains, villages, all  with a Mexican touch, to more fantasy 
                        inspired environments such as magic caves.
                        In terms of level design, levels are composed of platforming puzzles and challenges, 
                        some enemies for the player to use as practice for boss encounters and boss encounters 
                        at the end of each level. Checkpoints are set up almost after every section, to 
                        balance the difficulty of the game.

                    </p>
                </Col>
            </Row>



           





        </Container>
    )
}
export default LuchaDor;