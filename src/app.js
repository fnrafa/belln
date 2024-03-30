const app = require('express')();
const {port} = require("./config/config");
const {corsMiddleware} = require("./middlewares/cors");
const {rateLimits} = require("./middlewares/rateLimit");
const {route} = require("./routes/index");
corsMiddleware(app);
rateLimits(app);
route(app);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});