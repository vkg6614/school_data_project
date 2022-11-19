import express from "express";
import StudentControllers from "../controllers/studentControllers.js";
const router = express.Router();

router.use("/all", StudentControllers.getAllStudents);
router.use("/single/:id", StudentControllers.getStudent);
router.use("/add", StudentControllers.createStudent);
router.use("/edit/:id", StudentControllers.updateStudent);
router.use("/delete/:id", StudentControllers.deleteStudent);

export default router;
