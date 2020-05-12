const express = require("express");
let path = require("path");
const fs = require("fs");
const router = express.Router();

path = path.join(__dirname, "../../data/db.json");

router.get("/", (req, res) => {
  fs.readFile(path, (error, data) => {
    if (error) throw error;
    const { cards } = JSON.parse(data);
    res.json(cards);
  });
});

router.post("/", (req, res) => {
  fs.readFile(path, (error, data) => {
    if (error) throw error;
    const json = JSON.parse(data);
    json.cards.push(req.body);
    fs.writeFile(path, JSON.stringify(json), error => {
      if (error) throw error;
      res.json(json);
    });
  });
});

router.delete("/:id", (req, res) => {
  fs.readFile(path, (error, data) => {
    if (error) throw error;
    const json = JSON.parse(data);
    json.cards = json.cards.filter(card => card.id != req.params.id);
    fs.writeFile(path, JSON.stringify(json), error => {
      if (error) throw error;
      res.json(json);
    });
  });
});

module.exports = router;
