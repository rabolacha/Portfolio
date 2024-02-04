import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cabril from "../../Assets/Projects/cabril/teste-capa2.png";
import beetrial from "../../Assets/Projects/bee/VU6fU2.png";
import checkapp from "../../Assets/Projects/checkapp.png";
import luchador from "../../Assets/Projects/luchador.png";
import hex from "../../Assets/Projects/hex.png";
import pureleaf from "../../Assets/Projects/lemon.png";
import howl from "../../Assets/Projects/movie.png";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const handlePrevClick = () => {
    setCurrentProjectIndex((currentProjectIndex - 1 + projects.length) % projects.length);
  };

  const handleNextClick = () => {
    setCurrentProjectIndex((currentProjectIndex + 1) % projects.length);
  };
  const projects = [
    {
      imgPath: cabril,
      title: "CabrilDamVR",
      description: "A photorealistic and immersive VR application that allows to conduct virtual visits to Cabril Dam, for educatrion purposes and visual inspections. Made with Unity and C#",
      ytLink: "https://drive.google.com/file/d/14fVXVD3vmQCyG7jUb1nJrJActDUxrwoa/view?usp=drive_link",
      pageLink: "https://fenix.tecnico.ulisboa.pt/cursos/meic-a/dissertacao/1972678479055772",
      tags: ["Unity 3D", "C#", "Blender", "MeshLab", "Photoshop"],
      projectId: "cabrildamvr"
    },
    {
      imgPath: beetrial,
      title: "Bee Trial",
      description: "2D side scroller game that follows the story of a bee. Bee Trial was showcased in the IST Game Fair, which emerged as one of the most popular stands.",
      itchLink: "https://pedormente.itch.io/bee-trial",
      ytLink: "https://www.youtube.com/watch?v=AhUhf2OcMTc",
      tags: ["Unity", "C#", "Photoshop"],
      projectId: "beetrial"
    },
    {
      imgPath: checkapp,
      title: "CheckApp",
      description: "An application designed with a co-designer who had dyslexia, to aid with the daily struggles she faced as a corporate employee.The resulting outline resulted in a high-fidelity prototype created with Figma.",
      figLink: "https://www.figma.com/proto/ueYNZSQ4jlEvkrYrAWdK6R?node-id=66-1760&mode=design&t=4rhJ9CDRgXhY60Vh-6",
      projectId: "checkapp",
      tags: ["Figma", "Photoshop"]
    },
    {
      imgPath: luchador,
      title: "Lucha.Dor",
      description: "Out of the Game Design course, the developed 2D platformer game 'Lucha.Dor' won the popularity poll after garnering praise for its originality and good execution.",
      itchLink: "https://pedormente.itch.io/luchador",
      projectId: "luchador",
      tags: ["Unity", "C#", "Photoshop"]
    },
    {
      imgPath: hex,
      title: "Hex.otic Pond",
      description: "A board game based on the timeless hex, but with a cute twist.",
      projectId: "hex",
      tags: ["Photoshop"],
    },
    {
      imgPath: pureleaf,
      title: "Promotional Poster",
      description: "A promotional poster for a refreshing beverage for a design challenge.",
      projectId: "pureleaf",
      tags: ["Photoshop"]
    },
    {
      imgPath: howl,
      title: "Movie Poster",
      description: "A movie poster of Howl's Moving Castle, paying homage to my long-time favorite, for a design challenge.",
      projectId: "howl",
      tags: ["Photoshop"]
    }

  ]


  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Row>
        <h1 style={{ paddingBottom: 50, paddingLeft: '10rem' }} className="heading">
          Projects
        </h1>

      </Row>

      <Row style={{ justifyContent: "space-between", paddingBottom: "10px" }}>
        {/* Backward Button */}
        <Col md='1' className="projects-side-arrows">
          <MdArrowBackIos className="project-arrows" onClick={handlePrevClick} />
        </Col>

        {/* Project Card */}
        <Col>
          <ProjectCard
            imgPath={projects[currentProjectIndex].imgPath}
            isBlog={false}
            title={projects[currentProjectIndex].title}
            description={projects[currentProjectIndex].description}
            ytLink={projects[currentProjectIndex].ytLink}
            pageLink={projects[currentProjectIndex].pageLink}
            itchLink={projects[currentProjectIndex].itchLink}
            figLink={projects[currentProjectIndex].figLink}
            tags={projects[currentProjectIndex].tags}
            projectId={projects[currentProjectIndex].projectId}
          />
        </Col>

        {/* Forward Button */}
        <Col md='1' className="projects-side-arrows">
          <MdArrowForwardIos className="project-arrows" onClick={handleNextClick} />
        </Col>
        {/* </Row> */}
      </Row>
    </Container>
  );
}

export default Projects;
