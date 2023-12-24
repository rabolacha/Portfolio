import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cabril from "../../Assets/Projects/environjap.png";
import beetrial from "../../Assets/Projects/VU6fU2.png";
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
    setCurrentProjectIndex((currentProjectIndex - 1) % projects.length);
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
      description: "2D side scroller game that follows the story of a bee.",
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
    // ... add other projects ...
  ]


  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <Row>
          <h1 style={{ paddingBottom: 50 }} className="heading">
            Projects
          </h1>

        </Row>

        <Row>

        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Row className="project-row" >
            {/* Backward Button */}
            <MdArrowBackIos className="project-arrows" onClick={handlePrevClick}/>

            {/* Project Card */}

              <ProjectCard
                imgPath={projects[currentProjectIndex].imgPath}
                isBlog={false}
                title={projects[currentProjectIndex].title}
                description={projects[currentProjectIndex].description}
                ytLink={projects[currentProjectIndex].ytLink}
                pageLink={projects[currentProjectIndex].pageLink}
                itchLink={projects[currentProjectIndex].itchLink}
                figLink={projects[currentProjectIndex].figLink}
                tags={[projects[currentProjectIndex].tags]}
                projectId={[projects[currentProjectIndex].projectId]}
              />


            {/* Forward Button */}
            <MdArrowForwardIos className="project-arrows" onClick={handleNextClick}/>
          </Row>



          {/* <Row>
            <Col className="project-card">
              <ProjectCard
                imgPath={cabril}
                isBlog={false}
                title="CabrilDamVR"
                description="A photorealistic and immersive VR application for conducting virtual visits and visual inpesctions of Cabril Dam. The basis for a future digital twin of the structure."
                // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                // demoLink="https://blogs.soumya-jit.tech/"
                ytLink="https://drive.google.com/file/d/14fVXVD3vmQCyG7jUb1nJrJActDUxrwoa/view?usp=drive_link"
                pageLink="https://fenix.tecnico.ulisboa.pt/cursos/meic-a/dissertacao/1972678479055772"
                tags={["Unity 3D", "C#", "Blender", "MeshLab", "Photoshop"]}
                projectId="cabrildamvr"
              />
            </Col>
          </Row>
          <Row>
            <Col className="project-card">
              <ProjectCard
                imgPath={beetrial}
                isBlog={false}
                title="Bee Trial"
                description="2D side scroller game that follows the story of a bee."
                // ghLink="https://github.com/soumyajit4419/Chatify"
                // demoLink="https://pedormente.itch.io/bee-trial"
                itchLink="https://pedormente.itch.io/bee-trial"
                ytLink="https://www.youtube.com/watch?v=AhUhf2OcMTc"
                tags={["Unity", "C#", "Photoshop"]}
                projectId="beetrial"
              />
            </Col>
          </Row>
          <Row>
            <Col className="project-card">
              <ProjectCard
                imgPath={checkapp}
                isBlog={false}
                title="CheckApp"
                description="An application designed with a co-designer who had dyslexia, to aid with the daily struggles she faced as a corporate employee. 
                The resulting outline resulted in a high-fidelity prototype created with Figma.."
                figLink="https://www.figma.com/proto/ueYNZSQ4jlEvkrYrAWdK6R?node-id=66-1760&mode=design&t=4rhJ9CDRgXhY60Vh-6"
                projectId="checkapp"
                tags={["Figma", "Photoshop"]}
              />
            </Col>
          </Row>
          <Row>
            <Col className="project-card">
              <ProjectCard
                imgPath={luchador}
                isBlog={false}
                title="Lucha.Dor"
                description="Out of the Game Design course, the developed 2D platformer game 'Lucha.Dor' won the popularity poll after garnering praise for its originality and good execution."
                itchLink="https://pedormente.itch.io/luchador"
                projectId="luchador"
                tags={["Unity", "C#", "Photoshop"]}
              />
            </Col>
          </Row>
          <Row>
            <Col className="project-card">
              <ProjectCard
                imgPath={hex}
                isBlog={false}
                title="Hex.otic Pond"
                description="A board game based on the timeless hex, but with a cute twist."
                projectId="hex"
                tags={["Photoshop"]}
              />
            </Col>
          </Row>
          <Row>
            <Col className="project-card">
              <ProjectCard
                imgPath={pureleaf}
                isBlog={false}
                title="Promotional Poster"
                description="A promotional poster for a refreshing beverage for a design challenge."
                projectId="pureleaf"
                tags={["Photoshop"]}
              />
            </Col>
          </Row>
          <Row>
            <Col className="project-card">
              <ProjectCard
                imgPath={howl}
                isBlog={false}
                title="Movie Poster"
                description="A movie poster of Howl's Moving Castle, paying homage to my long-time favorite, for a design challenge."
                projectId="howl"
                tags={["Photoshop"]}
              />
            </Col>
          </Row>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
