import { useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatusIcon] = useState("⁉️");
  // Something needs to change here…
  // ↙️
  async function handleCheckApiStatus() {
    try {
      setStatusIcon("⏳");
      const response = await fetch(apiStatusUrl);
      response.ok ? setStatusIcon("✅") : setStatusIcon("❌");
    } catch (error) {
      setStatusIcon("🚨");
      console.log(error);
    }
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
