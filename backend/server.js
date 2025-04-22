import express from 'express';
import cors from 'cors';
import {sql, poolPromise} from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/sneakers', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM sneakers');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

app.listen(5000, () => {
    console.log('Server running on port 5000');
})