require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Teacher = require("./models/teacher");
const { diakok, tanarok } = require("./adatok");

const PORT = process.env.PORT || 3500;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "jó a kettő csapat" });
  } catch (error) {
    res.status(500).json({ msg: " hiba történt!" });
  }
});

app.get("/diakok", (req, res) => {
  try {
    res.status(200).json({ msg: diakok });
  } catch (error) {
    res.status(500).json({ msg: "hiba történt!" });
  }
});

app.get("/tanarok", async (req, res) => {
  try {
    const tanarok = await Teacher.find({});
    res.status(200).json({ msg: tanarok });
  } catch (error) {
    res.status(500).json({ msg: " hiba történt!" });
  }
});

app.post("/tanarok", async (req, res) => {
  try {
    const { nev, cserejatekosokszama, nemzetseg, kep } = req.body;
    console.log(req.body);
    const ujTanar = new Teacher({
      nev,
      cserejatekosokszama,
      nemzetseg,
      kep,
    });
    console.log(ujTanar);
    await ujTanar.save();
    res.status(201).json({ msg: " foci eredmény létrehozása!" });
  } catch (error) {
    res.status(500).json({ msg: " hiba történt!" });
  }
});

// Adatbázis csatlakozás
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("adatbázis csat.!"))
  .catch((error) => console.log(error.message));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
