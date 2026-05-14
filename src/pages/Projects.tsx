function Projects() {
  const projects = [
    {
      title: "Personal Resume",
      description:
        "A personal resume website designed to showcase my background, skills, achievements, and educational journey in a clean and professional format.",
      reflection:
        "Creating this personal resume website helped me understand the importance of presenting information clearly and professionally. I improved my skills in layout design, typography, and organizing sections in a user-friendly way. This activity also taught me how to make webpages more visually balanced and responsive across devices. Through this project, I became more confident in structuring content and showcasing personal achievements online. It also encouraged me to pay closer attention to details and overall user experience.",
      link: "https://ubsitsalayromeojero.github.io/UNIT1_LESSON1_A_SALAY/",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      tech: ["HTML", "CSS", "Resume"],
    },

    {
      title: "Student Course Management System",
      description:
        "A web-based course management system that organizes student subjects, course details, and academic information in a structured interface.",
      reflection:
        "Developing the Student Course Management System helped me understand how information systems can organize academic data efficiently. I practiced creating structured layouts and handling different sections that manage student and course details. This project also improved my problem-solving skills when dealing with forms and navigation. I learned how important organization and clarity are in building systems used for education. Overall, the activity strengthened my confidence in designing more functional academic applications.",
      link: "https://ubsitsalayromeojero.github.io/FG_LAB2_SALAY/",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "Management", "UI"],
    },

    {
      title: "Student Information List",
      description:
        "A student information listing system that displays organized records and details of students using a clean and readable layout.",
      reflection:
        "This project helped me improve my ability to organize and display student information properly. I learned how to create cleaner data structures and make information easier to read for users. Building this activity also improved my understanding of tables, lists, and content arrangement in web applications. I realized how important accessibility and simplicity are when handling student-related records. The experience enhanced both my frontend development and organizational skills.",
      link: "https://ubsitsalayromeojero.github.io/FG_LAB3_SALAY/",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
      tech: ["Lists", "Forms", "Records"],
    },

    {
      title: "Student Club Dashboard",
      description:
        "A dashboard-style web application created to manage and display student club activities, announcements, and organization details.",
      reflection:
        "Creating the Student Club Dashboard improved my skills in designing dashboard-style interfaces and organizing multiple sections within one page. I practiced creating layouts that allow users to quickly understand important information. This project also helped me become more comfortable using reusable UI components and structured designs. I learned how dashboards can improve usability by presenting information clearly and efficiently. Overall, the activity strengthened my creativity and frontend design abilities.",
      link: "https://ubsitsalayromeojero.github.io/club-dashboard-lab/",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      tech: ["Dashboard", "React", "Bootstrap"],
    },

    {
      title: "University Event Registration Dashboard",
      description:
        "An event registration dashboard that allows users to manage university events, participant information, and registration workflows efficiently.",
      reflection:
        "This project taught me how registration systems work and how they manage event-related information efficiently. I improved my understanding of handling forms, collecting user input, and presenting organized event data. Building this dashboard also helped me practice creating cleaner workflows for registration processes. I learned how proper UI design can make systems easier to use for students and administrators. The activity gave me more confidence in creating structured management systems.",
      link: "https://ubsitsalayromeojero.github.io/event-dashboard/",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      tech: ["Registration", "Dashboard", "UI"],
    },

    {
      title: "Simple Student Portal",
      description:
        "A simple student portal interface designed for viewing announcements, accessing information, and navigating student-related services.",
      reflection:
        "Developing the Simple Student Portal helped me improve my understanding of portals used in academic environments. I practiced creating navigation systems, forms, and organized sections that simulate real student interactions. This project also strengthened my ability to design interfaces that are simple and easy to understand. I learned the importance of balancing functionality and visual clarity in educational systems. Overall, the activity enhanced both my technical and design skills.",
      link: "https://ubsitsalayromeojero.github.io/MG_LAB5_SALAY/",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
      tech: ["Portal", "Navigation", "Forms"],
    },

    {
      title: "Controlled and Uncontrolled Book Request Form",
      description:
        "A React-based book request form demonstrating the use of controlled and uncontrolled components for handling user input and form data.",
      reflection:
        "This activity introduced me to controlled and uncontrolled components in React forms. I learned the differences between handling form data directly through state and accessing it through references. Building this project improved my understanding of form validation and user input management. It also helped me realize the importance of efficient data handling in interactive applications. Through this experience, I became more confident in working with React forms and input systems.",
      link: "https://ubsitsalayromeojero.github.io/MG_LAB6_SALAY/",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "Forms", "Validation"],
    },

    {
      title: "Advanced Student Portal",
      description:
        "An advanced student portal system with more interactive features, organized navigation, and enhanced user interface design for academic use.",
      reflection:
        "Creating the Advanced Student Portal challenged me to build a more detailed and interactive system compared to earlier projects. I improved my skills in managing multiple pages, handling user interactions, and organizing larger amounts of content. This activity also taught me how important consistency and structure are in complex applications. I gained more confidence in creating responsive layouts and interactive features. Overall, the project greatly improved my frontend development experience.",
      link: "https://ubsitsalayromeojero.github.io/student-portal/",
      image:
        "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "Portal", "Interactive UI"],
    },

    {
      title: "Course Feedback Form",
      description:
        "A digital feedback form system that allows students to submit course evaluations and responses through a clean and organized interface.",
      reflection:
        "This project helped me understand how feedback systems collect and organize user responses effectively. I practiced creating forms that are simple, user-friendly, and visually organized. Building this activity also improved my understanding of handling user input and validating information properly. I learned how feedback systems can help improve communication between students and instructors. The experience strengthened my skills in form design and interaction handling.",
      link: "https://ubsitsalayromeojero.github.io/Finals_Lab_Salay/",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
      tech: ["Feedback", "Forms", "UI"],
    },

    {
      title: "Simple Portfolio Website",
      description:
        "A simple portfolio website created to present personal projects, technical skills, and academic accomplishments in an organized format.",
      reflection:
        "Building this portfolio website helped me improve my creativity and frontend design skills. I learned how to organize projects, reflections, and technical information into a cohesive and professional layout. This activity also improved my understanding of responsive design and visual consistency across sections. I became more confident in presenting my work and creating a website that reflects my growth as a developer. Overall, the project strengthened both my technical abilities and design thinking.",
      link: "https://ubsitsalayromeojero.github.io/portfolio-app/",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
      tech: ["Portfolio", "Responsive", "Frontend"],
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
              These are some of the academic and personal projects I developed
              throughout my journey in web development and application design.
              Each project helped me improve my understanding of UI/UX, routing,
              database integration, and frontend development workflows.
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
                    <h5 className="project-title">
                      {project.title}
                    </h5>

                    <p className="project-desc">
                      {project.description}
                    </p>

                    <div className="reflection-box">
                      <h6 className="reflection-title">
                        Reflection
                      </h6>

                      <p className="reflection-text">
                        {project.reflection}
                      </p>
                    </div>

                    <div className="tech-list">
                      {project.tech.map((tech) => (
                        <span className="tech-tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn"
                      >
                        View Project →
                      </a>
                    </div>
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