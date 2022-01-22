import express from "express";
// import createBug from "../CreateGetDelete/forBug.js";
// import getAllBugs from "../CreateGetDelete/forBug.js";
// import deleteBug from "../CreateGetDelete/forBug.js";

import aux from "../CreateGetDelete/forBug.js";




const router=express.Router();

router.get('/bugs',aux.getAllBugs);
router.post('/bug',aux.createBug);
router.delete('/bugs/:id', aux.deleteBug);

export default router;