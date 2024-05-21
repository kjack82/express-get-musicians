const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

app.use(express.json())

app.get("/Musician", async (req, res) => {
    const musicians = await Musician.findAll({});
    res.json(musicians)
});



module.exports = app;