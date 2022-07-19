const { Schema, model } = require("mongoose");

const schema = new Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    completedMeetings: Number,
    image: String,
    profession: { type: Schema.Types.ObjectId, ref: "Profession" },
    qualities: [{ type: Schema.Types.ObjectId, ref: "Qaulity" }],
    rate: Number,
    sex: { type: String, enum: ["male", "female", "other"] },
});

module.exports = model("User", schema);
