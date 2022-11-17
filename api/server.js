const express = require('express');
const app = express();

app.use("/test", (req, res) => {
    res.send({message: 'Hello World!'});
    res.end();

});

module.exports = app;


