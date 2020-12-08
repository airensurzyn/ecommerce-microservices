import express from 'express';

const app = express();
app.set('trust proxy', true);

app.all('*', async (req, res) => {
    res.send('Good');
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});