import {
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaLinkedin,
} from "react-icons/fa";

const Sidebar = () => {
  const profileLinks = [
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Baguio, Philippines",
    },
    {
      icon: <FaGraduationCap />,
      label: "Education",
      value: "University of Baguio",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "romeo@email.com",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/romeo-salay",
    },
  ];

  return (
    <aside className="profile-sidebar">
      <div>
        <div className="sidebar-profile">
          <div className="profile-image-wrap">
            <img src="/Romeo.jpg" alt="Romeo Jero Salay" />
          </div>

          <p className="sidebar-eyebrow">Portfolio</p>

          <h4>Romeo Jero Salay</h4>

          <p className="sidebar-role">
            Aspiring Full Stack Developer
          </p>

          <div className="sidebar-badges">
            <span>IT Student</span>
            <span>Web Developer</span>
          </div>
        </div>

        <div className="sidebar-stats">
          <div>
            <strong>3+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>12</strong>
            <span>Skills</span>
          </div>
        </div>

        <div className="sidebar-info-list">
          {profileLinks.map((item) => (
            <div className="sidebar-info-item" key={item.label}>
              <span className="sidebar-info-icon">{item.icon}</span>

              <div>
                <small>{item.label}</small>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar-socials">
          <a
            href="https://github.com/romeo-salay"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a href="mailto:romeo@email.com" aria-label="Email">
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="sidebar-footer">
        <FaCode />
        <p>
          Building simple, useful, and well-designed web projects while learning
          to become better with every build.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
