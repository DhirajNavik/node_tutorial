const express = require("express");
const Person = require('../models/person.js');
const routes = express.Router();


routes.post("/", async (req, res) => {

    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("Data Saved successfully");
        res.status(200).json(response);
    } catch (error) {
        console.log("Error saving data " + error);
        res.status(500).json("Internal server issue");
    }
})

routes.get("/", async (req, res) => {
    try {
        const response = await Person.find()
        res.status(200).json(response);

    } catch (error) {
        console.log("Error getting data " + error);
        res.status(500).json("Internal server issue");
    }
});

routes.get("/:work", async (req, res) => {
    try {
        const workType = req.params.work;
        if (workType.toLowerCase() == 'chef' || workType.toLowerCase() == 'waiter' || workType.toLowerCase() == 'manager') {
            const response = await Person.find({ work: workType.toLowerCase() });
            res.status(200).json(response);
        } else {
            res.status(404).json("Please enter valid type");
        }
    } catch (err) {
        res.status(500).json('Internal Server Issue');
        console.log(err);
    }
});

routes.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const response = await Person.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });
        if (!response) {
            res.status(404)
                .json({
                    "message": "Please check the details",
                    "status": 404
                });
        }

        res.status(200).json(response);
    } catch (error) {
        console.log("Error getting data " + error);
        res.status(500).json("Internal server issue");
    }
});


routes.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Person.fifndByIdAndDelete(id);
        if (!response) {
            res.status(404)
                .json({
                    "message": "Please check the details",
                    "status": 404
                });
        }

        res.status(200).json("Person deleted Successfully");
    } catch (err) {
        console.log("Error deleting data " + error);
        res.status(500).json("Internal server issue");
    }
});

module.exports = routes;
