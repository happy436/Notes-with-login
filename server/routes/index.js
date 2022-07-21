const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"))
router.use("/note", require("./note.routes"))

module.exports = router
