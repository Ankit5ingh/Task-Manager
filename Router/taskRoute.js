const express = require("express")
const router = express.Router();
const {getAllTask, postTasks, getOne, updateOne, deleteOne} = require("../Controller/taskController")

router.get("/", getAllTask);
router.post("/", postTasks);
router.get("/:id", getOne);
router.patch("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = router;