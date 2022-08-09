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
		console.log(req);
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
		const { noteId } = req.params;
		const removedComment = await Note.findById(noteId);
		console.log(removedComment);
		await removedComment.remove();
		return res.send(null);
	} catch (error) {
		res.status(500).json({
			message: "Error occurred on the server. Please try again later",
		});
	}
});

router.patch("/:noteId", auth, async (req, res) => {
	try {
		const { noteId } = req.params;
		const updatedNote = await Note.findByIdAndUpdate(noteId, req.body, {
			new: true,
		});
		res.send(updatedNote);
	} catch (error) {
		res.status(500).json({
			message: "Error occurred on the server. Please try again later",
		});
	}
});

module.exports = router;
