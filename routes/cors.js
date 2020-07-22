const express = require('express');
const cors = require('cors');
const Promos = require('../models/promotions');
const app = express();

const whitelist = ['http://localhost:3000', 'https://localhost:3443'];

var corsOptionsDelegate = (req, cb) => {
    var corsoptions;
    if(whitelist.indexOf(req.header('Origin')) !== 1) {
        corsoptions = { origin: true };
    }
    else {
        corsoptions = { origin: false };
    }
    cb(null, corsoptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);