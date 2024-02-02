import "./styles.css";

export default function App() {
  return <Greeting name="Swetha" isCoach={true} />;
}

function Greeting({ name, isCoach }) {
  return <h1>Hello, {isCoach ? "Coach" : name}!</h1>;
}
