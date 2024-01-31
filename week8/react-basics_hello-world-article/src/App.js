import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <div>
      <article>
        <h1>React Basics :</h1>
        <p>Here we are learning to use multiple html elements.</p>
      </article>
    </div>
  );
}
