import mongoose from "mongoose";
import { config } from "dotenv";
config({
  path: "./data/config.env",
});
//database
export const connectDb = mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "API",
  })
  .then(c => console.log(`Db started with ${c.connection.host}`))
  .catch(e => console.log(e));
