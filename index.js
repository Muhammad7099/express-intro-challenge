const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello world");
})

app.get('/user', (req, res) => {
  res.send(["user1", "user2", "user3"]);
})

app.post('/users', (req, res) => {
  res.send("User Add...");
})

app.patch('/users/:id', (req, res) => {
  res.send(`User with ID ${req.params.id} chenge...`);
})

app.delete('/users/:id', (req, res) => {
  res.send(`User with ID ${req.params.id} delete...`);
})

app.get('/admin', (req, res) => {
  res.send("Не хватает прав");
})

app.get("/contacts", (req, res) => {
  res.json({
    citi: "Grozny",
    street: "Trosheva",
    building: 7
  })
})


app.listen(port, () => {
  console.log("Server is Run...")
});
























//const express = require('express')
// const app = express()
// const port = 3000
//
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })