import { createServer } from "node:http";
import Chance from "chance";
const chance = new Chance();

function handler(request, response) {
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();
  console.log(chance);

  response.statusCode = 200;
  response.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
  );
}

export const server = createServer(handler);
