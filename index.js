const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/", (req, res) => {
    res.send("This is a post call");
});

app.post("/sum", (req, res) => {
    const {num1, num2} = req.body;

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({error: "Please provide two numbers in the request body"});
    }

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return res.status(400).json({error: "Both inputs must be numbers"});
    }

    const sum = num1 + num2;
    res.json({result: sum});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port} in ${process.env.NODE_ENV} mode`);
});
