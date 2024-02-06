import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <>
      <article className="article">
        <h2 className="article__title">Article with Attributes</h2>
        <label htmlFor="name">Name&apos;s :</label>
        <input id="name" type="text" minLength={5} />
        <a
          href="https://www.neuefische.de/bootcamp/java-development?utm_source=sea_google&utm_medium=search&utm_campaign=nonbrand_java_bundesweit&gad_source=1&gclid=CjwKCAiA_OetBhAtEiwAPTeQZ4hadz-h7lV0p2a98OO1U3kdnDJYIHBzXhQevr5H4GYl0pIZkSoBdBoCLXkQAvD_BwE"
          className="article__link"
        >
          Click Here!
        </a>
      </article>
    </>
  );
}
