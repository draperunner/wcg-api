import express from 'express';
import bodyParser from 'body-parser';

// Express
const app = express();
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/teams', require('./api/teams'));

// Start server
app.listen(8000, '127.0.0.1');
