/**
 * Created by babyduncan on 5/27/15.
 */


var http = require("http");


function httpHandler(requset, response) {
    "use strict";
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write("Hello World node server v2");
    response.end();
}

http.createServer(httpHandler).listen(8080);

