import {
  Accordion,
  OverlayTrigger,
  Popover,
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
} from "react-bootstrap";

function About() {
const popover = (
  <Popover className="profile-popover">
    <Popover.Header as="h3">Quick Profile</Popover.Header>
    <Popover.Body>
      I am an IT student who enjoys turning ideas into working web projects.
      I am still learning, but I like building interfaces that feel simple,
      organized, and easy to use.
    </Popover.Body>
  </Popover>
);

const specialties = [
  {
    title: "Frontend Development",
    desc: "I enjoy working on the parts of a website that people actually see and interact with. I focus on making layouts responsive, readable, and comfortable to use on different screen sizes.",
  },
  {
    title: "Backend Development",
    desc: "I am learning how the server side of an application works, from creating routes to handling data properly. I like understanding how the frontend and backend connect behind the scenes.",
  },
  {
    title: "Database Systems",
    desc: "I have experience working with MySQL and MongoDB for storing and organizing data. I am still improving, but I understand how important clean data structure is in a real application.",
  },
  {
    title: "UI/UX Design",
    desc: "I care about how a project feels, not just how it looks. I try to keep my designs clean and practical so users can understand the page without getting confused.",
  },
  {
    title: "Problem Solving",
    desc: "When something does not work, I try to break the problem into smaller parts instead of guessing right away. Debugging has helped me become more patient and more careful with my code.",
  },
  {
    title: "Team Collaboration",
    desc: "I have worked on group projects where communication and responsibility mattered. I try to do my part well, listen to feedback, and help keep the project moving.",
  },
];


  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Node.js",
    "Express",
    "MySQL",
    "MongoDB",
    "Java",
    "Python",
  ];

  return (
    <main className="about-page">
      <section className="about-hero">
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg={8}>
              <p className="hero-eyebrow">Hello, I'm</p>

              <h1 className="hero-title">
                Romeo Jero <span>Salay</span>
              </h1>

              <p className="hero-subtitle">
                Aspiring Full Stack Developer | UI/UX Enthusiast | Problem Solver
              </p>

              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
                rootClose
              >
                <Button className="hero-button">View Quick Profile</Button>
              </OverlayTrigger>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-section">
        <Container>
          <div className="section-heading">
            <p className="section-kicker">Profile</p>
            <h2>About Me</h2>
          </div>

          <Accordion className="about-accordion" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Background</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3 mb-3">
                  <Col sm={6} lg={3}>
                    <div className="info-box">
                      <span>Name</span>
                      <strong>Romeo Jero Salay</strong>
                    </div>
                  </Col>

                  <Col sm={6} lg={3}>
                    <div className="info-box">
                      <span>Age</span>
                      <strong>19</strong>
                    </div>
                  </Col>

                  <Col sm={6} lg={3}>
                    <div className="info-box">
                      <span>Location</span>
                      <strong>Philippines</strong>
                    </div>
                  </Col>

                  <Col sm={6} lg={3}>
                    <div className="info-box">
                      <span>Education</span>
                      <strong>University of Baguio</strong>
                    </div>
                  </Col>
                </Row>

              <p className="accordion-copy">
                I am currently studying Information Technology at the University of Baguio.
                Most of my learning right now is focused on web development, programming
                fundamentals, and understanding how real applications are planned and built.
                I enjoy projects where I can combine logic, design, and problem solving.
              </p>

              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Technical Skills</Accordion.Header>
              <Accordion.Body>
                <div className="skill-list">
                  {skills.map((skill) => (
                    <Badge bg="light" text="dark" key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Career Goals</Accordion.Header>
              <Accordion.Body>
                <p className="accordion-copy mb-0">
                  My goal is to become a full-stack developer who can build complete and useful
                  applications, from the interface down to the database. I know I still have a
                  lot to learn, so I want to keep improving through practice, real projects, and
                  working with people who can challenge me to become better.
                </p>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <section className="about-section specialties-section">
        <Container>
          <div className="section-heading">
            <p className="section-kicker">Strengths</p>
            <h2>Specialties</h2>
          </div>

          <Row className="g-4">
            {specialties.map((item) => (
              <Col md={6} lg={4} key={item.title}>
                <Card className="specialty-card">
                  <Card.Body>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default About;
