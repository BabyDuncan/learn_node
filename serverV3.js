/**
 * Created by babyduncan on 5/27/15.
 */

var http = require("http");

function start() {

    function httpHandler(requset, response) {
        "use strict";
        response.writeHead(200, {"Content-Type": "text/plain"})
        response.write("Hello World node server v3");
        response.end();
    }

    http.createServer(httpHandler).listen(8080);
}

exports.start = start;
