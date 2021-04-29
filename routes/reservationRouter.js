const express = require('express');
const Reservation = require('../models/reservationModel');
const cors = require('./cors');

const reservationRouter = express.Router();

reservationRouter.route('/')
.get(cors.corsWithOptions, (req, res, next) => {
    Reservation.find()
    .then(reservations => {
        console.log(reservations);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(reservations);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, (req, res, next) => {
    Reservation.create(req.body)
    .then(reservation => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(reservation);
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, (req, res) => {
    res.statusCode = 403;
    res.end('Still working on the put request...');
})
.delete(cors.corsWithOptions, (req, res, next) => {
    Reservation.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});


module.exports = reservationRouter;
