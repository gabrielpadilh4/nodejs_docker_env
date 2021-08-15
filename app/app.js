var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.post("/api/calculator", (req, res) => {

    var operationResult = 0;

    const { number1, number2, operation } = req.body;

    if (operation == "sum") {
        result = parseInt(number1) + parseInt(number2);
    }

    if (operation == "sub") {
        result = parseInt(number1) - parseInt(number2);
    }

    if (operation == "div") {
        result = parseInt(number1) / parseInt(number2);
    }

    if (operation == "mul") {
        result = parseInt(number1) * parseInt(number2);
    }

    if (result == 0) {

        var response = {
            message: `Value 1: ${number1} Value 2: ${number2} Operation: ${operation}`,
            value: "Value is zero or operation not found"
        }

        res.json(response);

    } else {

        var response = {
            message: `Value 1: ${number1} Value 2: ${number2} Operation: ${operation}`,
            value: result
        }

        res.json(response);
    }

});

app.get("/api/calculator", (req, res) => {
    res.json({ operations: ["sum", "sub", "div", "mul"] });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});