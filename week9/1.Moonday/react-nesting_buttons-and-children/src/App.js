import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button textColor="red">First Button</Button>
      <Button textColor="blue">Second Button</Button>
      <Button textColor="green">Third Button</Button>
      <Button textColor="brown">Fourth Button</Button>
    </main>
  );
}

function Button({ textColor, children }) {
  return (
    <button className="button" type="button" style={{ color: textColor }}>
      {children}
    </button>
  );
}
