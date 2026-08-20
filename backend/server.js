const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

let contacts = []

app.post('/contacts', (req, resp) => {

    contacts.push(req.body)
    resp.send("Submitted Successfully")
    console.log(contacts)

})

app.listen(3000, () => {
    console.log("Server Started")
})