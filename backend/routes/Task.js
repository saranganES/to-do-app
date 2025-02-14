const express = require("express");
const { taskList, addTask, editTask, deleteTask } = require("../controller/Task");
const router = express.Router();

router.get("/", taskList);

router.post("/", addTask);

router.put("/:id", editTask);

router.delete("/:id", deleteTask);

module.exports = router;
