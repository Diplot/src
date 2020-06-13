const path = require('path');
module.exports= {
    entry: "./src/main.js",
    mode:"development",
    output: {
        path: path.resolve(__dirname,"./dist/js")
    }
};

