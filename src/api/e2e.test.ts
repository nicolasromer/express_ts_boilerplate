import {describe, expect, test} from '@jest/globals';
import app from "../app";

import request from "supertest";

describe('Test funny word endpoints', () => {
    it('gets words', async() => {
        const url = "/api/funny-words";

        const response = await request(app)
            .get(url)
            .expect(200);

        expect(response.body).toEqual({"data": []})
    });

    it('adds words', async() => {
        const url = "/api/funny-words";

        const word = "floof";

        await request(app)
            .post(url)
            .send({word})
            .expect(201);

        const response2 = await request(app)
            .get(url)
            .expect(200);

        expect(response2.body).toEqual({"data": [word]});
    });
})
