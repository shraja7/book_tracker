const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/search-books", async (req, res) => {
  try {
    const { query } = req.query; // Get the search query from the URL parameter
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyA1SbOaAePilVMJleKphIiv4hjEWL8sCCM`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching books");
  }
});

module.exports = router;
