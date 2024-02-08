import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleIncrease() {
    setPeople(people + 1);
  }

  function handleDecrease() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrease={handleIncrease} onDecrease={handleDecrease} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
