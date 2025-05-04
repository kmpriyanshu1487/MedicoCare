import express from "express";
import { addDcotor } from "../Controller/adminController.js";
import upload from "../middleware/multer.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", upload.single("image"), addDcotor);

export default adminRouter;
