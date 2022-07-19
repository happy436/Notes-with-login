const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/User")

router.patch("/:id", async(req, res) => {

})

router.get("/", async(req, res) => {
    try {
        const list = await User.find();
        res.status(200).send(list);
    } catch (error) {
        res.status(500).json({
            message: "Error occurred on the server. Please try again later",
        });
    }
})

module.exports = router