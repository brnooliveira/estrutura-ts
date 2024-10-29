import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "./entities/User";
import { Product } from "./entities/Product";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [isProduction ? "dist/entities/*.js" : "src/entities/*.ts"],
  migrations: [isProduction ? "dist/migrations/*.js" : "src/migrations/*.ts"],
});
