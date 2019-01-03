// Setup NPM
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    logger          = require("morgan"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    methodOverride  = require("method-override"),
    http            = require("http"),
    path            = require("path");
    // airConditioner        = require("./models/airConditioner"),
    // Comment     = require("./models/comment");

app.use(express.static('./myApp'));

// Requiring API routes
// var airConditionerRoutes = require("./routes/airConditioner"),
//     commentRoutes    = require("./routes/comment");

// Database setup
// mongoose.connect("mongodb://patiparn.phot:bomgeo57@ds255958.mlab.com:55958/bnk48" || "mongodb://localhost/bnk48");

// Parsers for POST data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));

// Setup https method
app.use(methodOverride('_method'));

// Set our api routes
// app.use("/api/airConditioners", airConditionerRoutes);
// app.use("/api/airConditioners/:id/comments", commentRoutes);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`The Progreesive Web App Server Has Started!`));
