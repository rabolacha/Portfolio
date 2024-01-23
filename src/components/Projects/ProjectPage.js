import { useParams } from 'react-router-dom';
import cabril from "../../Assets/Projects/cabril.png";
import beetrial from "../../Assets/Projects/VU6fU2.png";
import { Container, Row } from 'react-bootstrap';

function ProjectPage() {
  const { projectId } = useParams();

  if (!projectId) {
    // Handle case where project is not found
    return <div>Project not found</div>;
  }

  return (
    <Container className='project-page-container'>
      <Container>
        <Row>
          <h1 style={{ paddingBottom: 50 }} className="heading">
            {(() => {
              switch (projectId) {
                case "cabrildamvr":
                  return "CabrilDamVR ";
                case "beetrial":
                  return "Bee Trial ";
                case "checkapp":
                  return "CheckApp ";
                case "luchador":
                  return "Lucha.Dor ";
                case "hex":
                  return "Hex.otic Pond ";
                case "pureleaf":
                  return "Promotional Poster ";
                case "howl":
                  return "Movie Poster ";
                default:
                  return "Default Heading";
              }
            })()}
          </h1>

        </Row>
        
        {projectId == 'cabrildamvr' && (
          <>

            <img src={cabril} alt={`Project: ${projectId.title}`} style={{ width: '50%', height: 'auto' }} />
            <br /><br /><br />
            <p>I played a central role in Bee Trial’s development, taking charge of <b className="purple">illustration</b>,
              <b className="purple">character, level, and interface design</b>, as well as <b className="purple">marketing and event planning strategies</b>.
              My contributions ensured a cohesive and engaging visual experience throughout the video game.</p>
          </>
        )}
        {projectId == 'beetrial' && (
          <>

            <img src={cabril} alt={`Project: ${projectId.title}`} style={{ width: '50%', height: 'auto' }} />
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
          </>
        )}
        {projectId == 'checkapp' && (
          <>

            <img src={cabril} alt={`Project: ${projectId.title}`} style={{ width: '50%', height: 'auto' }} />
            <br /><br /><br />
            <p>I played a central role in Bee Trial’s development, taking charge of <b className="purple">illustration</b>,
              <b className="purple">character, level, and interface design</b>, as well as <b className="purple">marketing and event planning strategies</b>.
              My contributions ensured a cohesive and engaging visual experience throughout the video game.</p>
          </>
        )}
        {projectId == 'luchador' && (
          <>

            <img src={cabril} alt={`Project: ${projectId.title}`} style={{ width: '50%', height: 'auto' }} />
            <br /><br /><br />
            <p>I played a central role in Bee Trial’s development, taking charge of <b className="purple">illustration</b>,
              <b className="purple">character, level, and interface design</b>, as well as <b className="purple">marketing and event planning strategies</b>.
              My contributions ensured a cohesive and engaging visual experience throughout the video game.</p>
          </>
        )}
        {projectId == 'hex' && (
          <>

            <img src={cabril} alt={`Project: ${projectId.title}`} style={{ width: '50%', height: 'auto' }} />
            <br /><br /><br />
            <p>I played a central role in Bee Trial’s development, taking charge of <b className="purple">illustration</b>,
              <b className="purple">character, level, and interface design</b>, as well as <b className="purple">marketing and event planning strategies</b>.
              My contributions ensured a cohesive and engaging visual experience throughout the video game.</p>
          </>
        )}
        {projectId == 'pureleaf' && (
          <>

            <img src={cabril} alt={`Project: ${projectId.title}`} style={{ width: '50%', height: 'auto' }} />
            <br /><br /><br />
            <p>I played a central role in Bee Trial’s development, taking charge of <b className="purple">illustration</b>,
              <b className="purple">character, level, and interface design</b>, as well as <b className="purple">marketing and event planning strategies</b>.
              My contributions ensured a cohesive and engaging visual experience throughout the video game.</p>
          </>
        )}
        {projectId == 'howl' && (
          <>

            <img src={cabril} alt={`Project: ${projectId.title}`} style={{ width: '50%', height: 'auto' }} />
            <br /><br /><br />
            <p>I played a central role in Bee Trial’s development, taking charge of <b className="purple">illustration</b>,
              <b className="purple">character, level, and interface design</b>, as well as <b className="purple">marketing and event planning strategies</b>.
              My contributions ensured a cohesive and engaging visual experience throughout the video game.</p>
          </>
        )}
      </Container>
    </Container>
  );
}

export default ProjectPage;