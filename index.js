const express = require('express')
const { connection } = require('./config/db')
const { postRoute } = require('./routes/post.route')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())




app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/api',postRoute)

app.listen(5000, async () => {
    try {
        await connection
        console.log('connected to db');
        console.log('server is running on port 5000');
    } catch (error) {
        console.log(error);
        console.log('can not connect');
    }
})