const express = require('express');
const app = express();
const cors = require('cors');
const nunjucks = require('nunjucks');
const axios = require('axios');
nunjucks.configure('src/views', {
    express: app,
    noCache: true,
    autoescape: true
})
app
   .use(express.static('public/styles'))
   .use(express.static('public/scripts'))
   .use(express.static('public/assets'))
   .use(express.static('public/components'))
   .use(cors())
   .get('/', async(req, res) => {
        return res.render('home.html');
   })
   .get('/json', async(req, res) => {
       const { data } = await axios('https://covid19-brazil-api.now.sh/api/report/v1')
       return res.json(data);
   })
   .listen(3000)