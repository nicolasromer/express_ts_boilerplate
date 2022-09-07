import {Request, Response} from "express";
import service from "./service";

export default {
    get(req: Request, res: Response) {
        // parse queries

        const words = service.getWords()

        res.send({data: words});
    },

    post(req: Request, res: Response) {
        // validation

        const word = req.body.word

        service.createWord(word);

        res.sendStatus(201);
    },
}
