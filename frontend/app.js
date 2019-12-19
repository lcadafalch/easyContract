const express = require('express');
const fs = require("fs");
const http = require("http");
const https = require("https");
const port = 443;

// Servidor estático

const app = express();
app.use(express.static("public"));
app.listen(port, () => console.log(`listening on http://easycontracts:${port}`));

app.get('', (req, res) => {
    res.sendFile(`index.html`, { root: www });
});