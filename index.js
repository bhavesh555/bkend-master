import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";

import postRoutes from "./routes/post2.js";

config({ path: "./t.env" });

const app = express();
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.get("/", (req, res) => res.send("Hello"));

app.use("/posts", postRoutes);
const CONNECTION_URL =
    "mongodb+srv://ashuji478:Acenitrr@cluster0.fwuy52p.mongodb.net/backDB";

const PORT = process.env.PORT || 5003;

mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server Running on Port: http://localhost:${PORT}`)
        )
    )
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);