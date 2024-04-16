import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import CabrilDamVR from "./CabrilDamVR";
import BeeTrial from "./BeeTrial";
import CheckApp from "./CheckApp";
import VirtualMonitors from "./VirtualMonitors";
import Hexotic from "./Hexotic";
import LuchaDor from "./LuchaDor";
import PromoPoster from "./PromoPoster";
import MoviePoster from "./MoviePoster";


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
          <h1 className="heading">
            {(() => {
              switch (projectId) {
                case "cabrildamvr":
                  return "CabrilDamVR ";
                case "beetrial":
                  return "Bee Trial ";
                case "checkapp":
                  return "CheckApp ";
                  case "virtualmonitors":
                  return "AR Monitors ";
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
          <CabrilDamVR/>
          
        )}
        {projectId == 'beetrial' && (
          <BeeTrial/>
        )}
        {projectId == 'checkapp' && (
          <CheckApp/>
        )}
        {projectId == 'virtualmonitors' && (
          <VirtualMonitors/>
        )}
        {projectId == 'luchador' && (
          <LuchaDor/>
        )}
        {projectId == 'hex' && (
          <Hexotic/>
        )}
        {projectId == 'pureleaf' && (
          <PromoPoster/>
        )}
        {projectId == 'howl' && (
          <MoviePoster/>
        )}
      </Container>
    </Container>
  );
}

export default ProjectPage;