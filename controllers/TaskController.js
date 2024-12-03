const { JWT_SECRET } = require("../config/keys")
const bcrypt = require("bcryptjs");
const Task = require("../models/Task")
const jwt = require("jsonwebtoken")

const TaskController = {
    async create(req,res){
        const task = await Task.create(req.body)
        res.status(201).send({message:"User successfully created",task})
    },

    async getAll(req, res) {
        try {
            const tasks = await Task.find()
            res.send(tasks)
        } catch (error) {
            console.error(error);
        }
    },
    async getById(req, res) {
        try {
            const tasks = await Task.findById(req.params._id)
            res.send(tasks)
        } catch (error) {
            console.error(error);
        }
    },
    async getByTitle(req, res) {
        try {
            const tasks = await Task.find({
                $text: {
                    $search: req.params.title,
                },
            });
            res.send(tasks);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Error fetching tasks" });
        }
    },
    async update(req, res) {
        try {
            const task = await Task.findByIdAndUpdate(
                req.params._id, //id del producto que quiero actualizar
                req.body,// el objeto con los datos a actualizar 
                { new: true }// para que el post de la respuesta sea el actualizado
            )
            res.send({ message: "post successfully updated", task });
        } catch (error) {
            console.error(error);
        }
    },
    async delete(req, res) {
        try {
            const task = await Task.findByIdAndDelete(req.params._id)
            res.send({ message: 'Task deleted', task })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'there was a problem trying to remove the task' })
        }
    },
}

module.exports = TaskController;