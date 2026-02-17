const express = require("express");
const path = require("path");

if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

const PORT = process.env.PORT;

const app = express();


// Serve static images.
app.use("/images", express.static(path.join(__dirname, "../public/images")));

//
// API endpoint returning advertise data.
//
app.get("/api/ads", (req, res) => {
    const ads = [
        {
            name: "Shopee",
            image: "/api/advertise/images/shopee.png",
            url: "https://shopee.co.th"
        },
        {
            name: "Lazada",
            image: "/api/advertise/images/lazada.png",
            url: "https://www.lazada.co.th"
        },
        {
            name: "Kaidee",
            image: "/api/advertise/images/kaidee.png",
            url: "https://www.kaidee.com"
        }
    ];
    res.json({ ads });
});

//
// Starts the HTTP server.
//
app.listen(PORT, () => {
    console.log(`Microservice online.`);
});
