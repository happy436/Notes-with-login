const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"))
router.use("/notes", require("./note.routes"))
router.use("/", require('./user.routes'))

module.exports = router
