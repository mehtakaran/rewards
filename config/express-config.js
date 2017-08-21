import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
const app = express(),
      server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

export default app;
