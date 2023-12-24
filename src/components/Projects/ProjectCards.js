import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaItchIo } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { IoLogoFigma } from "react-icons/io5";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  const handleButtonClick = (e) => {
    // Prevent the click event from propagating to the Link element
    e.stopPropagation();
  };

  return (
    <Link to={`/project/${props.projectId}`} style={{ textDecoration: 'none' }}>
     <div className="project-card">
        {/* Image */}
        <div className="project-card-image">
          <img src={props.imgPath} alt="Project" className="img-fluid" />
        </div>

        {/* Details */}
        <div className="project-card-details">
          <h1 className="project-card-title">{props.title}</h1>
          <p className="project-card-description">{props.description}</p>

            {/* Buttons */}
            <div className="project-card-buttons">

            {/* GitHub Button */}
            {props.ghLink && (
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )}

            {/* If the component contains Demo link and if it's not a Blog, then it will render the below component */}
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
                onClick={handleButtonClick}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}

            {/* Itch.io Button */}
            {props.itchLink && (
              <Button
                variant="primary"
                href={props.itchLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
                onClick={handleButtonClick}
              >
                <FaItchIo /> &nbsp;
                {"Itch.io"}
              </Button>
            )}

            {/* youtube Button */}
            {props.ytLink && (
              <Button
                variant="primary"
                href={props.ytLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
                onClick={handleButtonClick}
              >
                <FaYoutube /> &nbsp;
                {"Video"}
              </Button>
            )}

            {/* page Button */}
            {props.pageLink && (
              <Button
                variant="primary"
                href={props.pageLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
                onClick={handleButtonClick}
              >
                <MdArticle /> &nbsp;
                {"Article"}
              </Button>
            )}
            {/* figma Button */}
            {props.figLink && (
              <Button
                variant="primary"
                href={props.figLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
                onClick={handleButtonClick}
              >
                <IoLogoFigma /> &nbsp;
                {"Demo"}
              </Button>
            )}
             </div>

             {/* Tags */}
          <div className="project-card-tags">
            {props.tags &&
              props.tags.map((tag, index) => (
                <span key={index} className="custom-tag">
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCards;
