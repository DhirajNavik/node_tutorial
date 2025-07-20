const express = require("express");
const Menu = require("../models/menu.js")
const routes = express.Router();

routes.get("/", async (req, res) => {
    try {
        const response = await Menu.find()
        res.status(200).json(response);
    } catch (err) {
        console.log("Error :" + err);
        res.status(500).json('Internal server use');
    }
});

routes.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new Menu(data);
        const response = await newMenu.save();

        res.status(200).json(response);

    } catch (err) {
        console.log("Error :" + err);
        res.status(500).json('Internal server use');
    }
});

routes.get("/rating", async (req, res) => {
    try {
        const response = await Menu.find();
        res.status(200).json(response);

    } catch (err) {
        console.log("Error :" + err);
        res.status(500).json('Internal server use');
    }
});

routes.get("/rating/:rating", async (req, res) => {
    try {
        console.log("Hello World");

        const menuRating = req.params.rating;
        if (menuRating == null) {

        }
        const response = await Menu.find({ rating: menuRating });
        res.status(200).json(response);

    } catch (err) {
        console.log("Error :" + err);
        res.status(500).json('Internal server use');
    }
});

routes.put("/editMenu/:id", async (req, res) => {

    try {
        const id = req.params.id;
        const body = req.body;
        const response = await Menu.findByIdAndUpdate(id, body, {
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
        res.status(200).json(response)
    } catch (err) {
        console.log("Error" + err);
        res.status(500).json("Internal server issue");
    }

});

module.exports = routes;
