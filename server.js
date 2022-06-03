//Getting express to enable req and responses
const { request } = require("express");
const express = require("express");
//were using express and storing it in app; wherever there is app, its just and indication of express in action
const app = express();
const PORT = 8000;

//CREATE JSON
const rappers = {
  "21 savage": {
    name: "Savage",
    age: 29,
    birthLocation: "London",
  },
  "2 chainz": {
    name: "Chainz",
    age: 39,
    birthLocation: "LA",
  },
  unknown: {
    name: "unknown",
    age: 0,
    birthLocation: "unknown",
  },
};
//setting up the server to hear a request and generate a response
app.get("/", (request, response) => {
  //we respond to the resquest by sendFile() method
  response.sendFile(__dirname + "/index.html");
});

//creating API
app.get("/api/:name", (request, response) => {
  const rappersName = request.params.name.toLocaleLowerCase();
  if (rappers[rappersName]) {
    response.json(rappers[rappersName].birthLocation);
  } else {
    response.json(rappers["unknown"].birthLocation);
  }
});
//tell the server to listen to a port number
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}! Better go catch it!`);
});
//
