import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    if (!email.trim() || !password.trim()) {
      return "Please enter your email and password.";
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      return "Please enter a valid email address.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    return "";
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus(error);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        navigate("/admin/login");
      } else {
        setStatus(data.message || "Unable to create admin account.");
      }
    } catch (err) {
      console.log(err);
      setStatus("Unable to connect to the server. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <main className="admin-login-page">
      <section className="admin-login-shell">
        <div className="admin-login-panel">
          <p className="admin-kicker">Admin Access</p>

          <h1>Create Account</h1>

          <p className="admin-login-copy">
            Register an admin account using an email address so access can be
            managed more clearly and professionally.
          </p>

          <div className="admin-login-meta">
            <span>Email Login</span>
            <span>Dashboard Access</span>
            <span>Portfolio Management</span>
          </div>
        </div>

        <div className="login-card">
          <div className="login-card-header">
            <h2>Create Admin Account</h2>
            <p>Use your email and password to create your admin login.</p>
          </div>

          <form onSubmit={handleRegister} className="login-form">
            <div className="login-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </div>

            {status && <p className="login-status">{status}</p>}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>

          <p className="login-register-text">
            Already have an account? <Link to="/admin/login">Login</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default AdminRegister;
