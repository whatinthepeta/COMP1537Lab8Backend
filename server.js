const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

const axios = require("axios");
app.get("/weather", (req, res) => {
    const city = req.query.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=63f3c05bfc8de92422db12d6f77d759e`;
        axios
        .get(url)
        .then((response) => {
            const weatherData = {
                temperature: response.data.main.temp,
                description: response.data.weather[0].description,
                icon: response.data.weather[0].icon,
            };
            res.json(weatherData);
        })
        .catch((error) => {
            res.status(500).json({ error: "An error occurred" });
        });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`);
});
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});









// const express = require("express");
// const app = express();

// const cors = require("cors")
// const axios = require("axios")
// app.use(cors())

// app.get("/weather", async (req, res) => {
//     console.log(req.query.city);

//     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=63f3c05bfc8de92422db12d6f77d759e&units=metric;`)
//     console.log(response.data);

//     res.json(response.data)
// })

// app.listen(3000, () => {
//     console.log("we are using 3000!");
// })

