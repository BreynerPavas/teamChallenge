const express = require("express")
const TaskController = require("../controllers/TaskController.js")
//const { authentication } = require("../middleware/authentication")
const router = express.Router()


router.post("/create",TaskController.create)
router.get("/",TaskController.getAll)
router.get("/id/:_id",TaskController.getById)
router.get("/title/:title",TaskController.getByTitle)
router.put("/update/id/:_id",TaskController.update)
router.delete("/delete/id/:_id",TaskController.delete)


module.exports = router