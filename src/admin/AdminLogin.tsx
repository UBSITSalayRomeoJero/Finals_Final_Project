import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setStatus("Please enter both your username and password.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.trim(),
          password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("isAdminAuth", "true");
        navigate("/admin/dashboard");
      } else {
        setStatus("The username or password you entered is incorrect.");
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
          <p className="admin-kicker">Portfolio Control</p>

          <h1>Admin Login</h1>

          <p className="admin-login-copy">
            Sign in to manage portfolio content, review submitted messages, and
            keep the project information updated.
          </p>

          <div className="admin-login-meta">
            <span>Secure Access</span>
            <span>Dashboard</span>
            <span>Content Management</span>
          </div>
        </div>

        <div className="login-card">
          <div className="login-card-header">
            <h2>Welcome Back</h2>
            <p>Enter your admin credentials to continue.</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="login-field">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </div>

            {status && <p className="login-status">{status}</p>}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>

          <p className="login-register-text">
            No account? <Link to="/admin/register">Register</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default AdminLogin;
