import {Request, Response} from "express";
import express from "express";

const router = express.Router();

import controller from "./controller";

router.get('/', (req: Request, res: Response) => {
    res.send('healthy');
})

router.get('/funny-words', controller.get);

router.post('/funny-words', controller.post)

export default router
