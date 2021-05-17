const express = require('express');
const mysql = require('mysql');

const router = express.Router();
const connectionPool = require('../database/connection-pool');

// const db = require('../config/db');

//console.log(db.user, db.password);

/* GET users listing. */
router.get('/', function(req, res, next) {

  

  // create a book object
  const book = {
    'author':'Charles Dickens',
    'title':'Great Expectations',
    'published':'1861-01-01'
  };

  // run a query to insert
  connectionPool.getPool().query('insert into books set ?', book, (err, result) => {
    if(err) throw err;

    console.log(result);
  });

  res.send('books here!');
});

module.exports = router;
