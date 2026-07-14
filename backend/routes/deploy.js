const express = require("express");
const router = express.Router();

const { deployApplication } = require("../controllers/deployController");

router.post("/", deployApplication);

module.exports = router;