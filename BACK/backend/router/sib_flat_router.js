import express from "express";
const flat_router=express.Router();
import { saveFlatData } from "../controller/sib_flat_controller.js";
<<<<<<< HEAD
import uploadMiddleware from "../multer/upload.js";
import { getNearbyFlat, searchByDate } from "../controller/sib_flat_controller.js";
import uploadMiddleware from "../multer/upload.js";
=======
import upload from "../multer/upload.js";
import { searchByDate } from "../controller/sib_flat_controller.js";
>>>>>>> 56962f93bb65c1eed0ca5ef5896f286f7b40f297
// import { searchByDate, searchByFileNo } from "../controller/search.controller.js";

flat_router.post("/flat/savepdf", uploadMiddleware ,saveFlatData);

// flat_router.post("/flat/getnearby",getNearbyFlat);

flat_router.post("/flat/getByDate",searchByDate);

// pvr1_router.post("/pvr1/getByFile",searchByFileNo);

export default flat_router;