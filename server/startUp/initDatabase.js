const professionsMock = require("../mock/professions.json")
const qualitiesMock = require("../mock/qualities.json")

const Profession = require("../models/Profession")
const Quality = require("../models/Quality")

module.exports = async () => {
    const professions = await Profession.find()
    const qualities = await Quality.find()
    if(professions.length !== professionsMock.length){
        await createInitialEntity(Profession, professionsMock)
    }
    if(qualities.length !== qualitiesMock.length){
        await createInitialEntity(Quality, qualitiesMock)
    }
}

async function createInitialEntity(Model, data){
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch (error) {
                return error
            }
        })
    )
}