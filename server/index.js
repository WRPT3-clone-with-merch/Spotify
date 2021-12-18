require('dotenv').config();
const express = require('express');
const massive = require("massive");
const session = require("express-session");

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive({
	connectionString: CONNECTION_STRING,
	ssl: { rejectUnauthorized: false },
}).then((db) => {
	app.set("db", db);
	console.log("db connected");
}).catch(err => console.log(err));

app.use(
	session({
		resave: true,
		saveUninitialized: false,
		secret: SESSION_SECRET,
		cookie: { maxAge:  60000 * 60 * 24 * 90}
}));
app.use(express.json());

// Tracks Endpoints
app.get('/api/tracks/:id')

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT}`))