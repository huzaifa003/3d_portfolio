// Projects.jsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import IframeComponent from "../components/IframeComponent";
import "./Projects.css";
const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleIframe = (projectName) => {
    setActiveProject(activeProject === projectName ? null : projectName);
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>
      <p className="text-slate-500 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years. Each project, with its unique challenges, has significantly enhanced my technical skills, teamwork, and creativity, fueling my passion for game development.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className={`card ${activeProject === project.name ? 'flipped' : ''}`}>
              <div className="card-front">
                <div className="block-container w-12 h-12">
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={project.iconUrl}
                      alt="threads"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
                <div className="mt-5 flex flex-col">
                  <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
                  <p className="mt-2 text-slate-500 description">{project.description}</p>
                  <button onClick={() => toggleIframe(project.name)} className="mt-5 text-blue-600 font-semibold">
                    View More
                  </button>
                </div>
              </div>
              <div className="card-back">
                <IframeComponent src={project.link} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
