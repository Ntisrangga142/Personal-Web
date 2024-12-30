const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'hbs');

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/contact/", (req, res) => {
    res.send("Halaman Contact Form!")
  })

app.get("/project/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Halaman Project dengan Id = ${id}`)
  })

app.get("/:lang/project/:id", (req, res) => {
    const {id, lang} = req.params;
    const {name, title} = req.query;

    let textToRender = '';
    if(lang == 'id'){
        textToRender = `Halaman Project dengan Id = ${id} ; Author = ${name} ; Title = ${title}`;
    } else {

        textToRender = `Halaman Project dengan Id = ${id}`;
    }

    res.send(textToRender);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})