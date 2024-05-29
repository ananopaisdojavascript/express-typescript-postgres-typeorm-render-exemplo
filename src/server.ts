import express, { Request, Response } from "express"

const app = express()
const port = 3000
app.use(express.json())

app.get("/users", function (req: Request, res: Response) {
  res.send('🤗🤗🤗🤗🤗')
})

app.get("/users/:id", function (req: Request, res: Response) {
  // here we will have logic to return user by id
})

app.post("/users", function (req: Request, res: Response) {
  // here we will have logic to save a user
})

app.put("/users/:id", function (req: Request, res: Response) {
  // here we will have logic to update a user by a given user id
})

app.delete("/users/:id", function (req: Request, res: Response) {
  // here we will have logic to delete a user by a given user id
})

app.listen(port, () => {
  console.log('Servidor funcionando!!!')
})