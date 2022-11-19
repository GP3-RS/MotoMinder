import express from 'express'
import devBundle from './devBundle'
import path from 'path'
import template from './../template'
import { model } from 'mongoose'
const app = express()
devBundle.compile(app)
const CURRENT_WORKING_DIR = process.cwd()
const apiRouter = require('./routes/api')
require('dotenv').config();

const models = require('./models/motoModels')

let port = process.env.PORT || 3000

// handles parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serves static bundle file
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

//routes requests to api
app.use('/api', apiRouter)

app.get('/',
    ((req, res) => {
        res.status(200).send(template())
    })
)

app.use((req, res) => res.status(404).send('Error 404: This page does not exist'));

// Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})