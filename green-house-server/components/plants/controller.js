const Plant = require("../../models/Plant")
const jwt = require('jsonwebtoken');

const saveData = async (req, res) => {

    try {

        const plants = req.body

        plants.forEach(async body => {
            const filter = {
                plant_id: body.plant_id
            };
            const update = {
                temperature: body.temperature,
                wetness: body.wetness
            };

            await Plant.countDocuments(filter); // 0

            let doc = await Plant.findOneAndUpdate(filter, update, {
                new: true,
                upsert: true // Make this update into an upsert
            });
        });


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