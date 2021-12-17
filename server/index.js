require("dotenv").config();
const express = require('express');
const cors = require('cors');
const querystring = require('querystring');
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

const app = express();

const { login, callback, refreshToken } = require('./controllers/auth');

app.use(express.json());

app.get('/login', login)
app.get('/callback', callback)
app.get('/refresh_token', refreshToken)

app.listen(8888, () => console.log('Listening on 8888'))
