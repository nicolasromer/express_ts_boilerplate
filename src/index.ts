import express from 'express';
import * as path from 'path';

const PORT: number = 3000;

const app = express();

app.get('/', (req, res) => {
	res.send('Bacon is the food of the gods');
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
	console.log('listening on port ' + PORT);
})