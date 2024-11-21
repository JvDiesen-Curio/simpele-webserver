import express from 'express';
import { db } from './database/db';
import { db_users } from './database/schema/users';

const app = express();

app.get('/', (req, res) => {

    res.send('Hello World!');

})
app.get('/api/date', (req, res) => {

    res.json({
        date: new Date()
    })
})


app.listen(5000, () => {
    console.log('Server is running on port 5000');
})