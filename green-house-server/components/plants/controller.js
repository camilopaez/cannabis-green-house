const Plant = require("../../models/Plant")
const jwt = require('jsonwebtoken');

const saveData = async (req, res) => {

    try {
        const plant = new Plant(req.body)
        await plant.save()
        res.status(200).send("successfully saved")

    } catch (error) {

        res.status(500).send("Error saving")

    }

}

const getData = async (req, res) => {
    try {
        const decode = jwt.verify(req.headers.authorization, "mySecretToken")
        res.status(200).json(await Plant.find())
    } catch (error) {
        res.sendStatus(403);
    }


}

exports.getData = getData
exports.saveData = saveData