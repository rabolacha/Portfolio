import { useParams } from 'react-router-dom';
import cabril from "../../Assets/Projects/cabril.png";
import beetrial from "../../Assets/Projects/VU6fU2.png";
import { Container, Row } from 'react-bootstrap';

function ProjectPage2() {
    return (
        <Container>
            <img src={cabril}  style={{ width: '50%', height: 'auto' }} />
            <br /><br /><br />
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

            <h1 style={{ paddingBottom: 50 }} className="contacts-title">Game Art</h1>
            <h2>Characters</h2>
            <p>The game followed a cute and handmade aesthetic, so the characters had to be more simplified 
                and convey that aesthetic, with more round and bright shapes.
                On the other hand, it was also supposed to convey the dangerous nature of the wasp enemies, 
                which took on a more sharp and dark appearance.
            </p>
            <img src={shadow} className="img-fluid" alt="dam comparison" />
            <br /><br /><br /><br />
            <h2>UI</h2>
            <p>
            </p>
            <img src={shadow} className="img-fluid" alt="dam comparison" />
            <br /><br /><br /><br />
        </Container>
    )
}
export default ProjectPage2;