import { Carousel, Accordion, OverlayTrigger, Popover } from "react-bootstrap";

function About() {

  const popover = (
    <Popover>
      <Popover.Header as="h3">Quick Info</Popover.Header>
      <Popover.Body>
        Passionate about building modern web apps and UI design.
      </Popover.Body>
    </Popover>
  );

  return (
<div>

  {/* HERO */}
  <div className="hero">

    <div className="hero-content">
      <h1>
        Hi, I'm <span className="gradient-name">Romeo Jero Salay</span>
      </h1>
      <p>Aspiring Web Developer | UI Enthusiast</p>

      <OverlayTrigger trigger="click" placement="right" overlay={popover} rootClose>
        <span>
          <button className="btn btn-outline-light mt-3">
            More Info
          </button>
        </span>
      </OverlayTrigger>
    </div>
  </div>

      {/* ABOUT */}
      <div className="container mt-5 section-box">

        <h2 className="mb-3 title-sage">About Me</h2>

        <Carousel>
          <Carousel.Item>
            <img src="/About1.png" className="d-block w-100" />
            <Carousel.Caption>
              <h5>Developer Journey</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src="/About2.png" className="d-block w-100" />
            <Carousel.Caption>
              <h5>Projects & Skills</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Accordion className="mt-4">

<Accordion.Item eventKey="0">
  <Accordion.Header>My Background</Accordion.Header>
  <Accordion.Body>

    <div className="card p-3 bg-dark text-light">

      <h5 className="title-sage mb-3">Personal Information</h5>

      <p><strong>Name:</strong> Romeo Jero Salay</p>
      <p><strong>Age:</strong> 19 years old</p>
      <p><strong>Birthday:</strong> July 29, 2006</p>
      <p><strong>Location:</strong> Philippines</p>
      <p><strong>Status:</strong> IT Student at University of Baguio</p>

      <hr style={{ borderColor: "#444" }} />

      <p>
        I just graduated at University of Baguio this year with the Bachelor in Information Technology.
        Now I am currently trying to get hired by making this portfolio! 
      </p>

    </div>

  </Accordion.Body>
</Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>My Skills</Accordion.Header>
            <Accordion.Body>
                  <div className="card p-3 bg-dark text-light">
                    <h5 className="title-sage mb-3">List of my skills:</h5>
                    React, TypeScript, MySQL, Java, Python.
                  </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>My Goals</Accordion.Header>
            <Accordion.Body>
              To become a professional full-stack developer and contribute to impactful systems.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>

      </div>

      {/* SPECIALTIES */}
      <div className="container mt-5 section-box">

        <div className="row">

          <div className="col-md-4">
            <h2 className="title-purple">My Specialties</h2>
            <p style={{ color: "#bbb" }}>
              These are the areas where I focus my skills and continuously improve as a developer.
            </p>
          </div>

          <div className="col-md-8">
            <div className="row">

              <div className="col-md-6 mb-3">
                <div className="card p-3">
                  <h5 className="title-sage">Frontend Development</h5>
                  <p>-- Short Description --</p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card p-3">
                  <h5 className="title-sage">Backend Development</h5>
                  <p>-- Short Description --</p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card p-3">
                  <h5 className="title-sage">Database Management</h5>
                  <p>-- Short Description --</p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card p-3">
                  <h5 className="title-sage">UI/UX Design</h5>
                  <p>-- Short Description --</p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card p-3">
                  <h5 className="title-sage">Problem Solving</h5>
                  <p>-- Short Description --</p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card p-3">
                  <h5 className="title-sage">Team Collaboration</h5>
                  <p>-- Short Description --</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;