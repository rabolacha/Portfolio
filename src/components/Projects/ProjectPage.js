import { useParams } from 'react-router-dom';
import cabril from "../../Assets/Projects/cabril.png";
import beetrial from "../../Assets/Projects/VU6fU2.png";

function ProjectPage() {
  const { projectId } = useParams();

  if (!projectId) {
    // Handle case where project is not found
    return <div>Project not found</div>;
  }

  return (
    <div>
      {projectId == 'cabrildamvr' && (
        <>
          <br /><br /><br />
          <h1>{projectId.title}</h1>
          <img src={cabril} alt={`Project: ${projectId.title}`} style={{ width: '50%', height: 'auto' }} />
          <br /><br /><br />
          <p>I played a central role in Bee Trial’s development, taking charge of <b className="purple">illustration</b>, 
          <b className="purple">character, level, and interface design</b>, as well as <b className="purple">marketing and event planning strategies</b>. 
            My contributions ensured a cohesive and engaging visual experience throughout the video game.</p>
        </>
      )}

      {projectId == 'beetrial' && (
        <>
          <br /><br /><br />
          <h1>{projectId.title}</h1>
          <img src={beetrial} alt={`Project: ${projectId.title}`} style={{ width: '50%', height: 'auto' }} />
          <br /><br /><br />
          <p>'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'</p>
        </>
      )}
    </div>
  );
}

export default ProjectPage;