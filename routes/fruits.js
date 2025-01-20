const express = require("express");
const router = express.Router();
const fruits = require("../controllers/fruits")

router.get('/', fruits.index) // show all 
router.get("/:name", fruits.show); // show one
router.post("/", fruits.create) // create item
router.patch("/:name", fruits.update) // update item
router.delete("/:name", fruits.destroy) // delete item

module.exports = router
