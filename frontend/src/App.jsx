import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/test")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Backend connection error:", error);
        setMessage("Backend connection failed!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>REPORT</h1>
      <p>PhD Scholar Management System</p>

      <hr />

      <h2>Backend Connection</h2>

      {loading ? (
        <p>Connecting to backend...</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

export default App;