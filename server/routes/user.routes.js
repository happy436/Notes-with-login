const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware")
const User = require("../models/User");

router.patch("/:userId", async (req, res) => {
	try {
		const { userId } = req.params;
		if (userId) {
			const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
				new: true,
			});
			res.send(updatedUser);
		} else {
			res.status(401).json({ message: "Unauthorized" });
		}
	} catch (error) {
		res.status(500).json({
			message: "Error occurred on the server. Please try again later",
		});
	}
});

router.get("/:userId", auth, async (req, res) => {
	try {
        const { userId } = req.params;
		const list = await User.findById(userId);
		res.status(200).send(list);
	} catch (error) {
		res.status(500).json({
			message: "Error occurred on the server. Please try again later",
		});
	}
});

module.exports = router;
