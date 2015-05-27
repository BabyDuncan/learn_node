/**
 * Created by babyduncan on 5/27/15.
 */


function say(name) {
    "use strict";
    console.log(name);
}

say("babyduncan")

function call(func, para) {
    "use strict";
    func(para);
}

call(say, "hello");