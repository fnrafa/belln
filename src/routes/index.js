const express = require("express");
const guestRoutes = require('./guestRoutes');
const authRoutes = require('./authRoutes');
const adminRoutes = require('./adminRoutes');
const response = require("../utils/responses");
exports.route = (app) => {
    app.use(express.json());
    app.use('/auth', authRoutes);
    app.use('/guest', guestRoutes)
    app.use('/admin', adminRoutes);
    app.use('/*', (req, res) => {
        response.MethodNotAllowed(res);
    });
}