import {describe, expect, test} from '@jest/globals';
import app from "../app";

import request from "supertest";

describe('API test suite', () => {
    it('tests base route', async() => {
        const url = "/api";

        const response = await request(app).get(url);
        expect(response.text).toEqual("healthy");
        expect(response.statusCode).toBe(200);
    });
})

