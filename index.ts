import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(helmet());

const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => res.send("Express + TypeScript Server!!"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
