'use strict';

const axios = require('axios');
const { response } = require('./server/app');

const book = {
    'author':'Oliver Sacks',
    'title':'The man man who mistook his wife for a hat',
    'published':'1985-01-01'
  };

axios.delete('http://localhost:3000/books/12345')
.then(response=>{
    console.log(response)
})
.catch(error=>{
    console.log(error)
})