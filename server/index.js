const express = require("express")
const app = express()
const SERVER_PORT = 4000
const ctrl = require("./controller")

app.use(express.json())

app.get("/api/books", ctrl.getAllBooks)
app.post("/api/books", ctrl.createBook)
app.put("/api/books/:book_id", ctrl.editBook)
app.delete("api/books/:book_id", ctrl.deleteBook)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))