import 'reflect-metadata'
import { DataSource } from "typeorm"
import dotenv from "dotenv";
import Users from '../entity/user.entity';

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env

const myDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5433"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Users],
  logging: true,
  synchronize: true,
})

export default myDataSource;