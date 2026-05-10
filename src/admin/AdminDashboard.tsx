import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface Message {
  name?: string;
  fullName?: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
}

function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selected, setSelected] = useState<Message | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAdminAuth");

  const getSenderName = (msg: Message) => msg.fullName || msg.name || "Unknown Sender";

  const fetchMessages = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/contact");
      const data = await res.json();

      setMessages(data);
      setSelected(data[0] || null);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (isAuth === "true") {
      fetchMessages();
    }
  }, [isAuth]);

  const filteredMessages = useMemo(() => {
    const term = search.toLowerCase().trim();

    if (!term) return messages;

    return messages.filter((msg) => {
      const sender = getSenderName(msg).toLowerCase();

      return (
        sender.includes(term) ||
        msg.email.toLowerCase().includes(term) ||
        msg.subject.toLowerCase().includes(term) ||
        msg.message.toLowerCase().includes(term)
      );
    });
  }, [messages, search]);

  const uniqueSenders = new Set(messages.map((msg) => msg.email)).size;
  const messagesWithSubject = messages.filter((msg) => msg.subject.trim()).length;

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuth");
    navigate("/admin/login");
  };

  if (isAuth !== "true") {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <main className="dashboard-page">
      <header className="dashboard-topbar">
        <div>
          <p className="dashboard-kicker">Admin Area</p>
          <h2>Message Dashboard</h2>
        </div>

        <div className="dashboard-actions">
          <button className="refresh-btn" onClick={fetchMessages} disabled={loading}>
            {loading ? "Refreshing..." : "Refresh"}
          </button>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <section className="dashboard-stats">
        <div className="stat-card">
          <span>Total Messages</span>
          <h3>{messages.length}</h3>
          <p>All contact form submissions</p>
        </div>

        <div className="stat-card">
          <span>Unique Senders</span>
          <h3>{uniqueSenders}</h3>
          <p>Based on sender email addresses</p>
        </div>

        <div className="stat-card">
          <span>With Subject</span>
          <h3>{messagesWithSubject}</h3>
          <p>Messages with a clear topic</p>
        </div>
      </section>

      <section className="dashboard-grid">
        <aside className="inbox-panel">
          <div className="inbox-header">
            <div>
              <h4>Inbox</h4>
              <p>{filteredMessages.length} messages shown</p>
            </div>
          </div>

          <input
            className="dashboard-search"
            type="text"
            placeholder="Search messages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="inbox-list">
            {filteredMessages.length > 0 ? (
              filteredMessages.map((msg, i) => {
                const sender = getSenderName(msg);

                return (
                  <button
                    key={`${msg.email}-${i}`}
                    className={`inbox-item ${selected === msg ? "active" : ""}`}
                    onClick={() => setSelected(msg)}
                  >
                    <span className="sender-avatar">
                      {sender.charAt(0).toUpperCase()}
                    </span>

                    <span className="inbox-copy">
                      <strong>{sender}</strong>
                      <small>{msg.subject || "No subject"}</small>
                    </span>
                  </button>
                );
              })
            ) : (
              <p className="empty-list">No messages found.</p>
            )}
          </div>
        </aside>

        <article className="message-panel">
          {selected ? (
            <>
              <div className="message-header">
                <div>
                  <p className="message-label">Selected Message</p>
                  <h3>{selected.subject || "No subject provided"}</h3>
                </div>

                <a
                  className="reply-btn"
                  href={`mailto:${selected.email}?subject=Re: ${selected.subject}`}
                >
                  Reply
                </a>
              </div>

              <div className="message-meta">
                <div>
                  <span>From</span>
                  <strong>{getSenderName(selected)}</strong>
                </div>

                <div>
                  <span>Email</span>
                  <strong>{selected.email}</strong>
                </div>

                {selected.createdAt && (
                  <div>
                    <span>Received</span>
                    <strong>{new Date(selected.createdAt).toLocaleDateString()}</strong>
                  </div>
                )}
              </div>

              <div className="message-body">
                <p>{selected.message}</p>
              </div>
            </>
          ) : (
            <div className="empty-state">
              <h3>No message selected</h3>
              <p>Select a message from the inbox to view the full details.</p>
            </div>
          )}
        </article>
      </section>
    </main>
  );
}

export default AdminDashboard;
