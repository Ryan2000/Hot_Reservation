/**
 * Created by ryanhoyda on 7/27/17.
 */
var reservationList = [
    {
        id: 1,
        name: "User1",
        email: "user1@email.com",
        phone: "1010010010"
    },
    {
        id: 2,
        name: "User2",
        email: "user2@email.com",
        phone: "1010010010"
    },
    {
        id: 3,
        name: "user3",
        email: "user3@email.com",
        phone: "1010010010"
    },
    {
        id: 4,
        name: "user4",
        email: "user4@email.com",
        phone: "1010010010"
    },
    {
        id: 5,
        name: "user5",
        email: "user5@email.com",
        phone: "1010010010"
    },
    {
        id: 6,
        name: "user6",
        email: "user1@email.com",
        phone: "1010010010"
    },

];
//var waitingList = [];

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 80;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Star Wars Characters (DATA)
// =============================================================


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
    res.json(reservationList.slice(0, 5));
});

app.get("/api/waitlist", function(req, res) {
    res.json(reservationList.slice(5));
});


// Create New Characters - takes in JSON input
app.post("/api/reserve", function(req, res) {
    res.json(reservationList);
});

app.post("/submit", function(req, res) {
    var newReservation = req.body;

    console.log(newReservation);

    reservationList.push(newReservation);

    res.xml(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});