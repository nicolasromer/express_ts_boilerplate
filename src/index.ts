import express from 'express';
import * as path from 'path';

const router = require("./api/routes");

const app = express();

app.use('/api', router);

// Static file service
app.use(express.static(path.join(__dirname, 'static')));
app.use('/js', express.static(path.join(__dirname, 'public')));


const PORT: number = 3000;

app.listen(PORT, () => {
	console.log('listening on port ' + PORT);
})
