// Init
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer  = require('multer');
const upload = multer();
const request = require('request');
const qs = require('querystring');

const app = express();
const APP_PORT = process.env.PORT || 3001;

const PRICEAPIURL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/all'; 

// BTC order array
const btcOrderList = [];

// app.use(bodyParser.json({limit: '50mb'}));

// Initialize static content
// Homepage will be index.html at localhost:xxxx
// Temp set to Angular dist folder
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, '../', 'dist', 'day09a')));

// bodyParser
// app.use(bodyParser.json());
// !!! Take out for now
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded());

// CORS
app.use(cors());

// POST (receiving the form info from frontend)
app.post('/setinfo', upload.none(), (req,res,next) => {
    // FormData
    const btcData = req.body;
    if (btcData === undefined) {
        // If incoming information is empty, return a status 204 response
        res.status(400);
        res.format({
            html: () => { res.send('html, data received') },
            json: () => { res.json({ status: '400: Bad request' })}
        })
    } else {
        // Pushes new order to the order array
        btcOrderList.push(req.body);
        res.status(200);
        res.format({
            html: () => { res.send('html, data received') },
            json: () => { res.json({ status: 'json, data received' })}
        })
    }
});

// GET (gives a list of all orders to populate the information in frontend order list)
app.get('/getallinfo', (req,res,next) => {
    res.status(200);
    res.format({
        html: () => { res.send('HTML format not supported') },
        json: () => { res.json(JSON.stringify(btcOrderList))}
    })
});

// GET (giving the list of a single order)
app.get('/getsingleinfo', (req,res,next) => {
    const id = req.query.id;
    // Matches the order object in the btcOrderList array through the given order ID
    const orderMatched = btcOrderList.find((value) => value.orderID === id);
    if (orderMatched === undefined) {
        // If order is not found, send status 404 response
        res.status(404);
        res.format({
            html: () => { res.send('HTML format not supported') },
            json: () => { res.json({ status: '404 Not Found: Order does not exist!' }) }
        })
    } else {
        res.status(200);
        res.format({
            html: () => { res.send('HTML format not supported') },
            json: () => { res.json(JSON.stringify(orderMatched))}
        })
    }
});

// PUT (updates the single order)
app.put('/updatesingleinfo',upload.none(), (req,res,next) => {
    // FormData containing details of single order
    const updatedOrderData = req.body;
    // Gets the order ID
    const id = req.query.id;
    // Finds the index of the order to be updated in the btcOrderList array through the given order ID
    const orderIndex = btcOrderList.findIndex((value) => value.orderID === id);
    if (orderIndex === -1) {
        // If order is not found, send status 400 response
        // Added in case delete functionality is implemented
        res.status(400);
        res.format({
            html: () => { res.send('HTML format not supported') },
            json: () => { res.json({ status: '400 Bad Request: Order does not exist!' }) }
        })
    } else {
        // If order is found, update/replace the order object
        btcOrderList[orderIndex] = updatedOrderData;
        res.status(200);
        res.format({
            html: () => { res.send('HTML format not supported') },
            json: () => { res.json({ status: 'Order updated successfully' }) }
        })
    }
});

// GET Bitcoin price (request)
app.get('/price', (req, res, next) => {
    const options = {
        url: PRICEAPIURL,
        qs: {
            crypto: req.query.crypto,
            fiat: req.query.fiat
        },
        headers: {
            'Accept': 'application/json',
            'X-testing': 'testing'
        }
    };
    request(options, (error, response, body)=>{
        if (!error && response.statusCode == 200) {
            res.status(200).json(JSON.parse(body));
        } else {
            res.status(404).json({ status: '404 Not Found' });
        };
    });
})

// Catch-all
app.use((req, res, next) => {
    res.redirect('/error.html');
});

// Logs the port that is used
app.listen(APP_PORT, () => {
    console.info(`Webserver at port ${APP_PORT}`);
});
