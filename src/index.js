const express = require('express');

const app = express();

app.get("/courses", (request, response) => {
    return response.json(["curso1", "curso2", "curso3"]);
})

app.post("/courses", (request, response) => {
    return response.json(["curso 1", "curso2", "curso3"]);
})

app.put("/courses/:id", (request, response) => {
    return response.json(["curso6", "curso2", "curso3", "curso4"])
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["curso6", "curso7", "curso3", "curso4"])
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["curso6", "curso3", "curso4"])
})

app.listen(3333)