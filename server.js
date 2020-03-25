const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tamagotchi";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
var db = mongoose.connection;

// In case of mongoose errors
db.on("error", function(error) {
    console.warn("Mongoose Error: ", error);
});
// Otherwise log a success message
db.once("open", function() {
    console.info("Mongoose connection successful.");
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
