import express from 'express';
import * as path from 'path';

import router from "./api/routes";

const app = express();

app.use(express.json());

app.use('/api', router);

// Static file service
app.use(express.static(path.join(__dirname, 'static')));
app.use('/js', express.static(path.join(__dirname, 'public')));

export default app;
