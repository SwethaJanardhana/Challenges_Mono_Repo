import { createServer } from "node:http";

function handler(request, response) {
  response.end("Hello, Swetha...");
}

export const server = createServer(handler);
