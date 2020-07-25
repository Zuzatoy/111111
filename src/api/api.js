
const express = require('express')
const app = express()
var cors = require('cors')


app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
    const todos = [
        {id: 1, name: 'clean up', status: 'open'},
        {id: 2, name: 'pook', status: 'done'},
        {id: 3, name: 'kek', status: 'done'},
        {id: 4, name: 'lick', status: 'done'},
        {id: 5, name: 'shmik', status: 'done'}
    ]
    res.send({data: todos})
})

app.get('/todos/:todo', (req, res) => {
    res.send({id: 1, name: 'clean up', status: 'open'})
})

module.exports = app;
