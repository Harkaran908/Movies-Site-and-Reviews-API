import express from "express";
import cors from "cors";
import reviews from "./api/reviews.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/reviews", reviews);
app.use("/*splat", (req, res) => res.status(404).json({error: "Not found"}));

export default app;