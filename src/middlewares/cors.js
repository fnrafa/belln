const cors = require('cors');
const response= require('../utils/responses')
const allowedOrigins = ['http://localhost.com', 'https://belln.com'];
const corsOptions = {
    origin: allowedOrigins,
    methods: 'GET,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    optionsSuccessStatus: 200,
};
exports.corsMiddleware = (app) => {
    app.use(cors(corsOptions));
    app.use((err, req, res, next) => {
        if (err instanceof Error) {
            if (err.message.includes('Not allowed by CORS')) return response.Forbidden(res, err.message);
            return response.InternalServerError(res);
        }
        next();
    });
}