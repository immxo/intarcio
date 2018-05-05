const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = require('../dbconfig/db');

mongoose.connect(db.url);

const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    name     : String,
    tel      : Number,
    email    : String,
    comment  : String
});
const Order = mongoose.model("Order", OrderSchema);

router.get('/', function(req, res) {
    Order.find({}, function(err, data){
        if(err) return console.log(err);
        res.send(data);
    });

});

router.post('/insert', function(req, res) {
    const order = new Order({
        name: req.body.name,
        tel: req.body.tel,
        email: req.body.email,
        comment: req.body.comment
    });
    order.save(function (err) {
        if(err) res.json({status: false});
        res.json({status: true});
    });

});


module.exports = router;
