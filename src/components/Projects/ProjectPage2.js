import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import chars from "../../Assets/Projects/bee/chars.png";
import beetrial from "../../Assets/Projects/bee/VU6fU2.png";
import shadow from "../../Assets/Projects/bee/VU6fU2.png";

function ProjectPage2() {
    return (
        <Container>
            <Row style={{ paddingTop: 50 }} className='project-row-2'>
                <Row>
                    <img src={beetrial} className="img-fluid" alt="bee game" />
                </Row>
                <Row>
                    <p>I played a central role in Bee Trial’s development, taking charge of <b className="purple">illustration</b>,
                        <b className="purple">character, level, and interface design</b>, as well as <b className="purple">marketing and event planning strategies</b>.
                        My contributions ensured a cohesive and engaging visual experience throughout the video game.</p>
                    <p>Initially I contributed to <b className="purple">programming the weapons</b>, but then changed to taking charge of the game's aesthetic
                        choices. This included <b className="purple">designing</b> the game's environment to match the story, as well as designing the main character, allies, and enemies accordingly.</p>
                    <p> I also designed the remaining assets such as weapons and powerups, as well as the user interfaces
                        and skins for the player.
                    </p>
                    <p>
                        Apart from this, I also was in charge of managing the game's website and curate the game stand experience
                        for the game fair by designing posters, stickers and costumes.
                    </p>
                </Row>
            </Row>

            <br /><br />

            <h1 style={{ paddingBottom: 50 }} className="contacts-title">Game Art</h1>
            <p>The Assets were all created using Medibang Paint and Photoshop.</p>

            <Row className='project-row-1'>
                <Col>
                    <h2>Characters</h2>
                    <p>The game followed a cute and handmade aesthetic, so the characters had to be more simplified
                        and convey that aesthetic, with more round and bright shapes.
                        On the other hand, it was also supposed to convey the dangerous nature of the wasp enemies,
                        which took on a more sharp and dark appearance.
                    </p>
                </Col>
                <Col>
                    <img src={chars} className="img-fluid" alt="characters" />
                </Col>
            </Row>
            {/* meter fotos dos chacters e early designs + sketches */}
            <br /><br /><br /><br />


            <h2>UI</h2>
            <p>
                The user interface elements were designer to match the cute handmade aesthetic of the concept,
                with light handdrawn shapes and flower decirations.
                The dialogue UI resembles that of a visual novel? ....

                The backgrounds of the game were also made to always match the specific part of they game.
                The main screen background reresented the bee, sitting in a piece of wood in a small cliff with the trees far in the back,
                which is both a calming scene and foreshadowing of the game's finale.

                During the game, the moving background with the parallax effect simulates the movement of the bee
                throughout its journey. During the wrath/villain arc turning to red and darker shades to convey the bee's
                emotional state.

                When the player lost, the background would show the defeated bee under a spotlight in a dramatic atmosphere,
                evoking the sense of solitude, defeat, tension, and drama.
                The inventory/appearance section is also symbolic, representing the bee's house, in which
                each hexagon of the honeycomb contains an item.
            </p>
            <img src={shadow} className="img-fluid" alt="dam comparison" />
            <br /><br /><br /><br />

            <h2>UI</h2>
            <p>
            </p>
            <img src={shadow} className="img-fluid" alt="dam comparison" />
            <br /><br /><br /><br />




            <h1 style={{ paddingBottom: 50 }} className="contacts-title">Game Design</h1>
            <h2>Core Experience</h2>
            <p>
                In Bee Trial, the player is challenged to explore this peculiar world in the shape of an exciting horizontal scroller
                shooter where he is constantly finding new enemies or even making them, follow the path of our Bee while trying to
                survive multiple waves of foes and have a fun time exploring a wide range of distinct weapons, collect all the
                powerups and see as their power increase, but that’s not all, if luck is on your side the enemies can drop some
                valuable items that you can add to your Bee giving a unique and classy feel.
                As the game progresses the challenge increases, stronger enemies appear and the player’s reactions and decisions
                are tested to the limit, nature is dangerous and evil can appear from everywhere so the player must stay sharp and do
                everything he can to survive, even if it means betraying his own colony…

            </p>
            {/* <img src={shadow} className="img-fluid" alt="dam comparison" /> */}
            <br /><br /><br /><br />

            <h2>Base References</h2>
            <p>
                Space Invaders - The core of our idea. The player controls an object which needs to be defended and used to kill others.
                Chicken Invaders - An upgrade to space invaders which fits our game. Like so, weapons can be upgraded and levels get progressively harder.
                LocoRoco - Aesthetics and miu miu house - We want to give a cute vibe to the overall composition of the game, even if it gets darker in the actions. Locorocco does this perfectly and also gives us the inspiration for the player to have a hive, which will work as an inventory for the items he gets.
                Hollow knight - Character design - Good art which works as reference for bugs we want to add in the game. Our game will be much brighter and have a more happy feeling than hollow knight, but the enemies silhouette can be similar.

            </p>
            <img src={shadow} className="img-fluid" alt="dam comparison" />
            <br /><br /><br /><br />

            <h2>Core Gameplay</h2>
            <p>
                Elements
            </p>
            <ul>
                <li>Controls for moving the bee and attacking</li>
                <li>Power Ups and different weapons that can be picked up after defeating enemies</li>
                <li>Bee peers interactions based on hostility towards them</li>
                <li>Inventory system with items picked up on runs</li>
                <li>All runs will be procedurally generated, meaning neither the enemies or the drops will always have the same timing.
                    The decision was made to increase the flexibility of the gameplay, allied with the unpredictableness that is nature.</li>
            </ul>

            <p>
                The inventory system is tied with the gameplay but provides info about the story.
                Items will be dropped on very rare occasions and will remain in the player forever,
                if he catches them. They will give a visual  effect if chosen, but all of them will have something to do with the lore.

                Other bees interact with the player in different ways, according to where they are in the story.
                They will help in the beginning, and cut relations when the player starts killing bees. The player will
                then be able to choose if he wants to befriend other bees or continue in the dark path of the story.
                Power Ups will balance the fire power of the player throughout the run and different weapons will give
                the player choice in how they feel better playing the game.
            </p>

            <p>Game loops and modes</p>




            <img src={shadow} className="img-fluid" alt="dam comparison" />
            <br /><br /><br /><br />

            <h2>Storyboards</h2>
            <p>
            </p>
            <img src={shadow} className="img-fluid" alt="dam comparison" />
            <br /><br /><br /><br />

            <h2>Development</h2>
            <p>
                The game was made with Unity and C#.
            </p>
            <img src={shadow} className="img-fluid" alt="dam comparison" />
            <br /><br /><br /><br />




            <h1 style={{ paddingBottom: 50 }} className="contacts-title">Game Fair</h1>
            <h2>The Stand</h2>
            <p>
                The stand consisted of the playable area, with 2 seats plus the computer and 28 inch screen and big speaker.
                Apart from the current player, there were also seats for spectators and next players.
                On the background there was a board containing the concept art, controls poster, game poster,
                redeem codes and, of course, a leaderboard!
                To add to the ambience of the stand, there a piano was added next to the stand for anywone who wanted to play it.
                The group members all wore thematic clothing, with flowers and bright colours, apart from the
                pretty flower crowns!
                At the end of the session, each participant received a promotional sticker.

            </p>
            <img src={shadow} className="img-fluid" alt="dam comparison" />
            <br /><br /><br /><br />

            <h2>Feedback</h2>
            <p>
                The stand ended up being one of the most popular of the game fair, having people consistently
                waiting in the queue to play.
                The feedback obtained was also extremely positive, both from visitors and professors alike,
                praising its visuals, enjoyability and interesting plot.
                The game was picked by the university's gamedev unit to represent them at <b className="purple">Lisbon Games Week</b>.

            </p>
            <img src={shadow} className="img-fluid" alt="dam comparison" />
            <br /><br /><br /><br />
        </Container>
    )
}
export default ProjectPage2;