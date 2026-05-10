function Projects() {
  const projects = [
    {
      title: "Club Dashboard Web App",
      description:
        "A dashboard-style web app made for viewing club information in a more organized way. This project helped me practice building clean layouts, grouping data clearly, and making a page feel useful instead of just decorative.",
      link: "https://ubsitsalayromeojero.github.io/club-dashboard-lab/",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "Bootstrap", "Dashboard"],
      features: [
        "Dashboard layout for quick scanning",
        "Organized sections for club-related data",
        "Responsive design for different screen sizes",
      ],
    },
    {
      title: "City Issue Reporting System",
      description:
        "A community-focused reporting platform where users can submit and track city concerns. I worked on this project to better understand how forms, navigation, and visual organization can support a real-world reporting process.",
      link: "https://ubsitnierelfamara.github.io/city-issue-platform/#/",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "UI System", "Routing"],
      features: [
        "Issue reporting interface",
        "Structured pages with routing",
        "Clear layout for reviewing submitted concerns",
      ],
    },
    {
      title: "Self Made Student Portal",
      description:
        "A student portal concept designed to help students view school announcements and send feedback to the administration. This project gave me more practice in creating pages that feel simple, direct, and useful for everyday school communication.",
      link: "https://ubsitsalayromeojero.github.io/student-portal/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjB1-KrIW9APBu9R11KS9xx-SV3bb8zzSqDQ&s",
      tech: ["Forms", "Data Collection", "Viewing System"],
      features: [
        "Announcement viewing section",
        "Feedback form for students",
        "Simple student-centered interface",
      ],
    },
  ];

  return (
    <main className="projects-page">
      <section className="projects-header">
        <div className="container">
          <p className="section-kicker">Selected Work</p>

          <div className="projects-heading">
            <h2>Projects</h2>
            <p>
              These are some of the academic web projects I built while studying
              at the University of Baguio. Each project helped me improve a
              different part of development, from designing clearer interfaces to
              working with forms, routing, and structured page layouts.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4" key={project.title}>
                <article className="project-card">
                  <div className="project-image-wrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />

                    <span className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="project-card-body">
                    <h5 className="project-title">{project.title}</h5>

                    <p className="project-desc">{project.description}</p>

                    <div className="project-features">
                      {project.features.map((feature) => (
                        <div className="project-feature" key={feature}>
                          <span></span>
                          <p>{feature}</p>
                        </div>
                      ))}
                    </div>

                    <div className="tech-list">
                      {project.tech.map((tech) => (
                        <span className="tech-tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn"
                    >
                      View Live Project
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
