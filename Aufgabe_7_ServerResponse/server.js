"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //Ein HTTP-Objekt wird generiert.
var L05_Server;
(function (L05_Server) {
    console.log("Starting server"); //Auf der Konsole wird "Starting server" ausgegeben.
    let port = Number(process.env.PORT); //Eine Variable vom Typ "number" wird generiert. Die Umgebungsvariable port sagt dem Server, auf welchen Port er achten muss.
    if (!port) //Wenn kein Port gefunden werden kann, dann nimmt die Variable "port" den Wert 8100 an.
        port = 8100;
    let server = Http.createServer(); //Variable "server" wird generiert; Ein Server wird erstellt.
    server.addListener("request", handleRequest); //Dem Server wird ein Listener zugeordnet vom Typ "request". Dieser ruft die Funktion "handleRequest" auf.
    server.addListener("listening", handleListen); //Dem Server wird ein Listener zugeordnet vom Typ "listening". Dieser ruft die Funktion "handleListen" auf.
    server.listen(port); //Dem Server wird der Port übergeben.
    function handleListen() {
        console.log("Listening"); //Gibt "Listening" auf der Konsole aus.
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Gibt "I hear voices" auf der Konsole aus.
        _response.setHeader("content-type", "text/html; charset=utf-8"); //.setHeader liest einen Header aus, der sich in einer Warteschlange befindet und noch nicht an den Client gesendet wurde.
        _response.setHeader("Access-Control-Allow-Origin", "*"); //.setHeader liest einen Header aus, der sich in einer Warteschlange befindet und noch nicht an den Client gesendet wurde. Der Befehl gibt die Erlaubnis, alles auszulesen.
        _response.write(_request.url); //Informationen werden an den Client übergeben und in die URL geschrieben.
        _response.end(); //Signalisiert dem Server, dass der Informationsaustausch beendet wurde und die Funktion beendet ist.
    }
})(L05_Server || (L05_Server = {}));
//# sourceMappingURL=server.js.map