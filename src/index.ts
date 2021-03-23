import express from 'express';
import * as path from 'path';

const PORT: number = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use('/js', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
	console.log('listening on port ' + PORT);
})