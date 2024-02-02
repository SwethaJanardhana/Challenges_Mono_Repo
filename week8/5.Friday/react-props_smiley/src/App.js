import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy />
      <br />
      <Smiley />
    </div>
  );
}

function Smiley({ isHappy }) {
  return isHappy ? "😃" : "🙁";
}
