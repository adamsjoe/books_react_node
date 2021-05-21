var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./routes/books');

var app = express();

app.use(cors());

// slows things by 5 seconds
app.use(function(req, res, next) {
    setTimeout(next, 1000);
});

// throw a 500 when trying to delete
app.use(function(req, res, next) {
    if (req.method == 'DELETE') {
        res.sendStatus(500);
    } else {
        next();
    }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);

module.exports = app;
