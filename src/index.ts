import express from 'express';

const PORT: number = 3000;

const app = express();

app.get('/', (req, res) => {
	res.send('Bacon is the food of the gods');
})

app.listen(PORT, () => {
	console.log('listening on port ' + PORT);
})