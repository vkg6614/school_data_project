import express from "express";
import connectDB from "./configs/db.js";
import dotenv from "dotenv";
import allStudent from "./routes/studentRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());

const port = process.env.PORT || 4000;
connectDB(process.env.DB_URL);
app.use("/student", allStudent);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
