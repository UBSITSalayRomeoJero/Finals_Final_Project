import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (err) {
      console.log(err);
      alert("Error sending message");
    }
  };

  return (
    <div className="container mt-5">

      <div className="card p-4">

        <h2 className="text-center title-sage mb-4">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit}>

          {/* NAME */}
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* SUBJECT */}
          <div className="mb-3">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              className="form-control"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-3">
            <label>Message</label>
            <textarea
              name="message"
              className="form-control"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary w-100">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;