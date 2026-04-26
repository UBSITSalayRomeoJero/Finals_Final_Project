import { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/messages")
      .then(res => setMessages(res.data));
  }, []);

  return (
    <div>
      <h2>Received Messages</h2>

      {messages.map((msg: any, i) => (
        <div key={i} className="card mb-2 p-2">
          <h5>{msg.name}</h5>
          <p>{msg.email}</p>
          <p>{msg.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Admin;