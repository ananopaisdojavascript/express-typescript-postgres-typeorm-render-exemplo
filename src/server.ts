import express, { Request, Response } from "express"
import myDataSource from "./database/data-source"
import Users from "./entity/user.entity"

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

const app = express()
const port = 3000
app.use(express.json())

app.get("/users", async function (req: Request, res: Response) {
  const users = await myDataSource.getRepository(Users).find()
  res.json(users)
})

app.get("/users/:id", function (req: Request, res: Response) {
  // here we will have logic to return user by id
})

app.post("/users", async function (req: Request, res: Response) {
  const user = myDataSource.getRepository(Users).create(req.body)
  const results = await myDataSource.getRepository(Users).save(user)
  return res.send(results)
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