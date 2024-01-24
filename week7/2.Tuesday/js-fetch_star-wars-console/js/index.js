console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    const characters = data.results;
    characters.forEach((character) => console.table(character));
    const characterNames = characters.map((character) => character.name);
    console.log("Names: ", characterNames);
    const requiredObject = characters.find(
      (character) => character.name === "R2-D2"
    );
    console.log(
      `${requiredObject.name} eye color is : ${requiredObject.eye_color}`
    );
  }
}

fetchData();
