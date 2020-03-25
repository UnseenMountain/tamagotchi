import LoginPage from "../src/components/auth/LoginPage"

const express = require("express");
var router = express.Router(); 
const Player = require("../models/Article.js");

router.get("/",function(req,res){
    console.log("get request functioning");
    if (LoginPage.playerLoad !== null){
        Player.find({})   //.lean() [?]
        // execute query
        .exec(function(error, body) {
            //console.log("FIRING");
            // Log any errors
            if (error) {
                console.log(error);
            }
            // Otherwise, send the body to the browser as a json object
            else {
                console.log("Player: ", body);
                // res.render("index", {articles: body});
            }
        });
    }
});

//If item received from login is not null, grab the object with the Id from the DB

//If item received from login is not null, save stuff to the db
