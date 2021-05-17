'use strict';

const axios = require('axios');
const { response } = require('./server/app');

const book = {
    'author':'Jimmy Changa',
    'title':'Blah de blah',
    'published':'2000-01-01'
  };

axios.delete('http://localhost:3000/books/6')
.then(response=>{
    console.log(response)
})
.catch(error=>{
    console.log(error)
})