import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./data-source";

const PORT = process.env.APP_PORT;

AppDataSource.initialize()
  .then(() => {
    console.log("Database is initialized");
    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
