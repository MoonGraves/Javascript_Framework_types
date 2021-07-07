//Pääsovellus index.js
const express = require("express")
const cors = require("cors")
const lowDb = require("lowdb")

const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")
const { nanoid } = require("nanoid")

//read exist file/folder
const db = lowDb(new FileSync('db.json'))

db.defaults({ notes: [] }).write()

const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = 8080;

//Show the notes as inside file of the json
app.get('/notes', (req, res) => {
  const data = db.get("notes").value()
  return res.json(data)
})

app.post('/notes/new', (req, res) => {
  const note = req.body
  db.get("notes").push({
    ...note, id: nanoid()
  }).write()
  res.json({ success: true })
})

app.listen(PORT, ()=> {
  console.log(`Backend is running on http://localhost:${PORT}`)
})