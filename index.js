const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

/* Allowing the server to accept requests from the client. */
const corsFonfig = {
    origin: true,
    credentials: true,
}

app.use(cors(corsFonfig));
app.options('*', cors(corsFonfig));
app.use(bodyParser.json());

//Database connection
mongoose.connect(process.env.DATABASE_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database connected successfully"))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Routes
app.get("/", (req, res) => {
    res.send("Server is running");
})


/* This is a catch-all route that will catch any request that doesn't match any of the other routes. */
app.all("*", (req, res) => {
    res.status(404).json({ message: "Route not found" });
})

process.on('uncaughtException', err => {
    console.log(err);
    app.close(() => {
        process.exit(1);
    })
})