const express = require("express");
const auth = require("../middleware/auth.middleware");
const Note = require("../models/Note");
const router = express.Router({ mergeParams: true });

router
    .route("/")
    .get(auth, async (req, res) => {
        try {
            const { orderBy, equalTo } = req.query;
            const list = await Note.find({ [orderBy]: equalTo });
            res.send(list);
        } catch (error) {
            res.status(500).json({
                message: "Error occurred on the server. Please try again later",
            });
        }
    })
    .post(auth, async (req, res) => {
        try {
            const newNote = await Note.create({
                ...req.body,
                userId: req.user._id,
            });
            res.status(201).send(newNote);
        } catch (error) {
            res.status(500).json({
                message: "Error occurred on the server. Please try again later",
            });
        }
    });

router.delete("/:noteId", auth, async (req, res) => {
    try {
        const { noteId } = res.params;
        //const removedComment = await Note.findById(noteId)
        const removedComment = await Note.find({ _id: noteId });

        if (removedComment.userId.toString() === req.user._id) {
            await removedComment.remove();
            return res.send(null);
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error occurred on the server. Please try again later",
        });
    }
});

module.exports = router;
