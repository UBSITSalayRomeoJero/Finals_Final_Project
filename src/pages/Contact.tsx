import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      return "Please complete all fields before sending your message.";
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(formData.email)) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus(error);
      setStatusType("error");
      return;
    }

    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      const dbResponse = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const dbData = await dbResponse.json();
      console.log("DB RESPONSE:", dbData);

      if (!dbResponse.ok) {
        throw new Error("Database save failed");
      }

      const emailResponse = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      console.log("EMAIL SENT:", emailResponse.text);

      setStatus("Your message has been sent. Thank you for reaching out.");
      setStatusType("success");

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.log("ERROR:", err);
      setStatus("Sorry, something went wrong. Please try again later.");
      setStatusType("error");
    }

    setLoading(false);
  };

  return (
    <main className="contact-page">
      <section className="contact-header">
        <div className="container">
          <p className="section-kicker">Get In Touch</p>

          <div className="contact-heading">
            <h2>Contact Me</h2>
            <p>
              If you have a question, project idea, or feedback about my work,
              feel free to send me a message. I am always open to learning from
              others, working on meaningful projects, and improving through real
              experience.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-5">
              <aside className="contact-info-panel">
                <h3>Let’s start a conversation</h3>

                <p>
                  I am currently building my skills as an IT student and future
                  full-stack developer. Whether it is about school projects,
                  collaboration, or simple feedback, I would be glad to hear from
                  you.
                </p>

                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <span>Email</span>
                    <strong>Use the form to reach me directly</strong>
                  </div>

                  <div className="contact-info-item">
                    <span>Location</span>
                    <strong>Philippines</strong>
                  </div>

                  <div className="contact-info-item">
                    <span>Availability</span>
                    <strong>Open to academic projects and collaboration</strong>
                  </div>
                </div>
              </aside>
            </div>

            <div className="col-lg-7">
              <div className="contact-card">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is your message about?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" disabled={loading}>
                    {loading ? "Sending Message..." : "Send Message"}
                  </button>
                </form>

                {status && (
                  <p className={`contact-status ${statusType}`}>{status}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
