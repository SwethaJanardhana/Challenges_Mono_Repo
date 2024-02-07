import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 111, name: "🍌 Banana", color: "yellow" },
    { id: 222, name: "🍎 Apple", color: "red" },
    { id: 333, name: "🥭 Mango", color: "green" },
    { id: 444, name: "🥝 Kiwi", color: "gold" },
    { id: 555, name: "🍇 Grapes", color: "purple" },
  ];

  return (
    <ul className="app">
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          <Card name={fruit.name} color={fruit.color} />
        </li>
      ))}
    </ul>
  );
}
