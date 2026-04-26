import { useState } from "react";
import ProjectModal from "../components/ProjectModal";

interface Project {
  title: string;
  image: string;
  description: string;
  full: string;
}

function Projects() {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Student Portal",
      image: "/project1.png",
      description: "A Midterm Examination and making a full Student Portal for the school.",
      full: "/project2.png"
    },
    {
      title: "Club Event Dashboard",
      image: "/project3.png",
      description: "A Prelims Examination and making a Club Event Dashboard where we can track each student with their respective clubs.",
      full: "/project4.png"
    },
        {
      title: "Course Feedback Database",
      image: "/project5.png",
      description: "A Final Activity and making of a Feedback connected to a database.",
      full: "/project6.png"
    }
  ];

  return (
    <div>

      {/* SMALL HEADER (DIFFERENT FROM ABOUT) */}
      <div className="container mt-4 project-header">
        <h2 className="title-purple">PROJECTS</h2>
      </div>

      {/* INTRO */}
      <div className="container mt-3">

        <h3 className="title-sage">Recent Projects</h3>
        <p style={{ color: "#bbb" }}>
          These projects are part of my AppTech subject when I was first year at UB.
        </p>

        {/* PROJECT LIST */}
        <div className="row mt-4">

          {projects.map((proj, index) => (
            <div className="col-md-4 mb-4" key={index}>

              <div
                className="project-card"
                onClick={() => setSelectedProject(proj)}
              >

                <img src={proj.image} />

                {/* TITLE OVERLAY */}
                <div className="project-title-overlay">
                  {proj.title}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}

export default Projects;