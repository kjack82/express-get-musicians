const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

app.get("/Musician", async (req, res) => {
    const getMusician = await Musician.findAll({})
    res.json(getMusician)
})



module.exports = app;