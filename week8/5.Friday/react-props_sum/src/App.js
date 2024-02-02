import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={33} valueB={22} />;
}

function Sum({ valueA, valueB }) {
  return (
    <p>
      {valueA} + {valueB} = {valueA + valueB}
    </p>
  );
}
