"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "Test";
let db;
let players;
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://Hannes:testPW90@eia2-0xium.mongodb.net/FabianFish";
    databaseName = "FabianFish";
}
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to Database, error: ", _e);
    else {
        console.log("Connected to Database");
        db = _client.db(databaseName);
        players = db.collection("player");
    }
}
function insert(_doc) {
    players.insertOne(_doc, handleInsert);
}
exports.insert = insert;
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
function findAll(_callback) {
    var cursor = players.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, playerArray) {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(playerArray));
    }
}
exports.findAll = findAll;
//# sourceMappingURL=database.js.map