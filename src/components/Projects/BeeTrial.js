import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import chars from "../../Assets/Projects/bee/chars.png";
import beetrial from "../../Assets/Projects/bee/VU6fU2.png";
import main from "../../Assets/Projects/bee/main.png";
import inventory from "../../Assets/Projects/bee/inventory.png";
import lost from "../../Assets/Projects/bee/lost.png";
import sketches from "../../Assets/Projects/bee/sketches.png";
import dialog from "../../Assets/Projects/bee/dialog.png";
import mood from "../../Assets/Projects/bee/mood.png";
import gameelements from "../../Assets/Projects/bee/gameelements.png";
import gameflow from "../../Assets/Projects/bee/gameflow.png";
import gameloop from "../../Assets/Projects/bee/gameloop.png";
import story from "../../Assets/Projects/bee/story.png";
import coregameplayStoryboard from "../../Assets/Projects/bee/coregameplayStoryboard.png";
import coregameplayStoryboard2 from "../../Assets/Projects/bee/coregameplayStoryboard2.png";
import inventoryStoryboard from "../../Assets/Projects/bee/inventoryStoryboard.png";
import stand from "../../Assets/Projects/bee/stand.jpg";
import stand2 from "../../Assets/Projects/bee/stand2.jpg";
import early from "../../Assets/Projects/bee/early.png";


function ProjectPage2() {
    return (
        <Container>
            <Row style={{ paddingTop: 50 }} className='project-row-1'>
                <Col>
                    <img src={beetrial} className="img-fluid" alt="bee game" />
                </Col>
                <Col>
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
                </Col>
            </Row>

            <h1 style={{ paddingBottom: 20, textAlign: 'left' }} className="projects-title">Game Art</h1>
            <p>The Assets were all created using Medibang Paint and Photoshop.</p>

            <Row className='project-row-2'>
                <Col>
                    <h2>Characters</h2>
                    <p>The game followed a cute and handmade aesthetic, so the characters had to be more simplified
                        and convey that aesthetic, with more round and bright shapes.
                        On the other hand, it was also supposed to convey the dangerous nature of the wasp enemies,
                        which took on a more sharp and dark appearance.
                    </p>
                    <img src={chars} className="img-fluid" alt="characters" />
                </Col>
                <Col>
                    <img src={early} className="img-fluid" alt="early sketches" />
                </Col>
                <Col>
                    <img src={sketches} className="img-fluid" alt="early sketches" />
                </Col>

            </Row>
            {/* meter fotos dos chacters e early designs + sketches */}


            <Row className='project-row-1'>
                <h2>User Interface</h2>
                <Col>
                    <p>
                        The user interface elements were designer to match the cute handmade aesthetic of the concept,
                        with light handdrawn shapes and flower decorations.
                        The dialogue UI resembles that of a visual novel, for the story dialogue to be more intuitive for the player?
                        On the other hand, controls and gameplay text would always appear in the upper middle of the screen.
                    </p>
                </Col>
                <Col>
                    <img src={dialog} className="img-fluid" alt="dialogue" />
                </Col>
            </Row>
            <Row className='project-row-1'>
                <Col>
                    <p>
                        The backgrounds of the game were also made to always match the specific part of they game.
                        The main screen background reresented the bee, sitting in a piece of wood in a small cliff with the trees far in the back,
                        which is both a calming scene and foreshadowing of the game's finale.
                    </p>
                </Col>
                <Col>
                    <img src={main} className="img-fluid" alt="main screen" />
                </Col>
            </Row>
            <Row className='project-row-1'>
                <p>
                    During the game, the moving background with the parallax effect simulates the movement of the bee
                    throughout its journey. During the wrath/villain arc turning to red and darker shades to convey the bee's
                    emotional state.
                </p>
            </Row>
            <Row className='project-row-1'>
                <Col>
                    <p>
                        When the player lost, the background would show the defeated bee under a spotlight in a dramatic atmosphere,
                        evoking the sense of solitude, defeat, tension, and drama.
                        The inventory/appearance section is also symbolic, representing the bee's house, in which
                        each hexagon of the honeycomb contains an item.
                    </p>
                </Col>
                <Col>
                    <img src={lost} className="img-fluid" alt="game over screen" />
                </Col>
            </Row>




            <h1 style={{ paddingBottom: 20, textAlign: 'left' }} className="projects-title">Game Design</h1>
            <Row className='project-row-1'>
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
                {/* <img src={beetrial} className="img-fluid" alt="dam comparison" /> */}
            </Row>


            <Row className='project-row-1'>
                <h2>Base References</h2>
                <Col>
                    <p>
                        Space Invaders - The core of the idea. The player controls an object which needs to be defended and used to kill others.
                    </p>
                    <p>
                        Chicken Invaders - An upgrade to space invaders which fits the game. Like so, weapons can be upgraded and levels get progressively harder.
                    </p>
                    <p>
                        LocoRoco - Aesthetics and miu miu house - Convey a cute vibe to the overall composition of the game, even if it gets darker in the actions. Locorocco does this perfectly and also gives the inspiration for the player to have a hive, which will work as an inventory for the items they get.
                    </p>
                    <p>
                        Hollow knight - Character design - Good art which works as reference for bugs to add in the game. The game will be much brighter and have a more happy feeling than hollow knight, but the enemies silhouette can be similar.
                    </p>
                </Col>
                <Col>
                    <img src={mood} className="img-fluid" alt="moodboard" />
                </Col>
            </Row>



            <Row className='project-row-1'>
                <h2>Core Gameplay Elements</h2>
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
            </Row>
            <Row className='project-row-2'>
                <h2>Game loops and modes</h2>
                <Row>
                    <img src={gameloop} className="img-fluid" alt="game loop" />
                </Row>
                <Row>
                    * On “Receives powerups”, items will fly and if the player picks up he will get a boost in damage
                    and a weapon level that applies on all weapons. The drop can also be a Weapon Change item, which
                    allows the player to switch to the weapon that item gives.
                    ** On “Enemies get stronger” they will either gain some health, faster fire rate or even spawn
                    more with each wave completed.

                </Row>
                <Row>
                    <p>
                        Sometimes the loop can be cut between “Dies” and “Starts Playing” to introduce the story.
                        This will be made only in certain events as smoothly as possible in order to not break the
                        rhythm of the game.
                        The player loop consists of a well known formula. The player starts weak and gets progressively
                        stronger, feeling empowered. Game is adjusted according to how far the player got and eventually
                        he dies, making him lose that progress and starting weak again. The hunger for better results
                        and achieving his true potential keeps the will to play up.
                        The following game flow helps visualize this:
                    </p>
                </Row>
                <Row>
                    <img src={gameflow} className="img-fluid" alt="game flow" />
                </Row>
                <Row>
                    <img src={gameelements} className="img-fluid" alt="game elements" />
                </Row>
            </Row>

            <Row className='project-row-2'>
                <h2>Story Progression</h2>
                <Row>
                    <p>Bee Trial will start with a story based model, composed on three arcs:</p>
                    <p>
                        First arc - We start our journey killing enemies and gathering resources to further improve our hive.
                        There’s a need for a lot of resources and power to protect the hive so the player starts descending
                        into darkness, killing bees on the path to become stronger.
                    </p>
                    <p>
                        Second arc - The hive knows about our acts and a punishment is given to us. At this point we are just
                        enraged and leave the hive right into a killing spree.
                    </p>
                    <p>
                        Third arc - Marked by the player’s willingness to remediate the situation.
                        At the end the bee understands his wrongful acts and peace is restored.
                        The game will then follow an endless mode.

                    </p>
                </Row>
                <Row>
                    <img src={story} className="img-fluid" alt="story progression" />
                </Row>
            </Row>

            <Row className='project-row-2'>
                <h2>Storyboards</h2>
                <Row>
                    <p>
                        The following storyboards depict how the player interacts with the inventory and the core gameplay loop:
                    </p>
                </Row>
                <Row>
                    <img src={inventoryStoryboard} className="img-fluid" alt="inventory storyboard" />
                </Row>
                <Row>
                    <p>
                        Core gameplay storyboard (portuguese):
                    </p>
                </Row>
                <Row>
                    <img src={coregameplayStoryboard} className="img-fluid" alt="Core gameplay storyboard" />
                </Row>
                <Row>
                    <img src={coregameplayStoryboard2} className="img-fluid" alt="Core gameplay storyboard" />
                </Row>
            </Row>

            <Row className='project-row-1'>
                <h2>Time Window</h2>
                <p>
                    Expected time to complete story mode: (1h30 - 2h) + 0h05 * x
                </p>
                <p>
                    Explanation: x is the number of bees the player needs to kill or save
                    (depending on the act he is) above the limit we want to put into our game,
                    on a first iteration. This number can then be adjusted according to the balance
                    of fun/boring we get through data collected on early access.
                </p>
                <p>
                    Note that the play time of story mode can become endless if the player decides to make
                    a challenge of not killing any bees on act 1, even if it costs him his highscore, or not
                    saving any bee on act 2, if he decides so. We find this ability amusing and want to keep
                    it in our game, as it can remain as implicit challenges the player puts on himself.
                </p>
                <p>
                    The endless mode makes room for an endless amount of gameplay time that will eventually
                    wear out due to the repetitiveness of waves/weapons, if the player doesn’t care about beating
                    highscores or the player has finished gathering all collectibles / has no interest in gathering
                    all items.
                </p>
                <p>
                    Each run has an expected time of 5 to 20 minutes, which may vary due to how lucky the player
                    gets in gaining power ups and his own skill.
                </p>
            </Row>

            <Row className='project-row-2'>
                <h2>Player Progression</h2>
                <p>
                    Bee Trial is a natural wave progression that’s characteristic of its genre, the players start by facing
                    smaller and easier challenges so they get used to the mechanics of the bee and patterns within the waves
                    this way they gradually get prepared to face the harder challenges that the game gradually evolves too.
                </p>
                <p>
                    The waves that appear on the early stages of the game grow in the number of enemies and these enemies
                    have an increasing fire rate throughout a single run, not only that but the player also faces stronger
                    and different types of enemies after a certain number of waves and is challenged with some other type of
                    attacks.
                </p>
                <p>
                    As the enemies get stronger the player also evolves into a stronger state during a single play session.
                </p>
                <p>
                    All these changes occur on a single run, so in each play session the player can achieve this sense of growth in power and challenge.

                </p>
            </Row>

            <Row className='project-row-1'>
                <h2>Development</h2>
                <p>
                    The game was made with Unity and C#, using the Universal Render Pipeline.
                </p>
                <p>
                    As for the assets, they were first sketched on Autodesk Sketchbook and then
                    redrawn on Medibang Paint. Photoshop was also used for painting, adding effects and
                    adjustments.
                </p>
                <p>
                    The music for the game used royalty free songs, found on youtube, which corresponed to
                    the desired moment of the game.
                </p>
            </Row>




            <h1 style={{ paddingBottom: 20, textAlign: 'left' }} className="projects-title">Game Fair</h1>
            <Row className='project-row-1'>
                <h2>The Stand</h2>
                <Row>
                    <p>
                        The stand consisted of the playable area, with 2 seats plus the computer and 28 inch screen and big speaker.
                        Apart from the current player, there were also seats for spectators and next players.
                    </p>
                    <p>
                        On the background there was a board containing the concept art, controls poster, game poster,
                        redeem codes and, of course, a leaderboard!
                        To add to the ambience of the stand, there a piano was added next to the stand for anywone who wanted to play it.
                    </p>
                    <p>
                        The group members all wore thematic clothing, with flowers and bright colours, apart from the
                        pretty flower crowns!
                    </p>
                    <p>
                        At the end of the session, each participant received a promotional sticker.
                    </p>

                </Row>
                <Row>
                    <Col>
                        <img src={stand} className="img-fluid" alt="game fair stand" />
                    </Col>
                    <Col>
                        <img src={stand2} className="img-fluid" alt="game fair stand" />
                    </Col>
                </Row>
            </Row>

            <Row className='project-row-1'>
                <h2>Feedback</h2>
                <p>
                    The stand ended up being one of the most popular of the game fair, having people consistently
                    waiting in the queue to play.
                    The feedback obtained was also extremely positive, both from visitors and professors alike,
                    praising its visuals, enjoyability and interesting plot.
                    The game was picked by the university's gamedev unit to represent them at <b className="purple">Lisbon Games Week</b>.

                </p>
                <p>
                    After the playtesting it was concluded that the game ended up with an interesting storyline
                    and a good dystopian design with the cute visuals and the twisted personality of our Bee friend
                    that surprised our testers and added more breadth.
                </p>
            </Row>
        </Container>
    )
}
export default ProjectPage2;