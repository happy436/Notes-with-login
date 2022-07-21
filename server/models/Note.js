const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        note: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            require: true,
        },
    },
    {
        timestamps: {createdAt: "created_at"},
    }
);

module.exports = model("Comment", schema);
