import React from "react";
import "./styles.css";

export default function App() {
  function handleEventName() {
    alert("You clicked me!");
  }

  return (
    <div>
      <Button
        color="red"
        isDisabled={false}
        text="Danger"
        onEventName={handleEventName}
      />
      <Button
        color="green"
        isDisabled={false}
        text="Submit"
        onEventName={handleEventName}
      />
      <Button
        color="grey"
        isDisabled={true}
        text="Disabled"
        onEventName={handleEventName}
      />
    </div>
  );
}

function Button({ color, isDisabled, text, onEventName }) {
  return (
    <button
      onClick={onEventName}
      disabled={isDisabled}
      style={{ backgroundColor: `${color}` }}
    >
      {text}
    </button>
  );
}
