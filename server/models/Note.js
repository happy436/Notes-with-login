const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        name: {
            type: String
        },
        color: {
            type: String,
            required: true
        },
        note: {
            type: String,
            required: true
        },
        checked: {
            type: Boolean,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            require: true
        }
    },
    {
        timestamps: { createdAt: "created_at" }
    }
);

module.exports = model("Note", schema);
