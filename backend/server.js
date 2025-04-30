import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import {sql, poolPromise, config} from './db.js';

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


app.post('/api/register', async (req, res) => {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const pool = await poolPromise;

        const checkResult = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT * FROM users WHERE email = @email');

        if (checkResult.recordset.length > 0) {
            return res.status(400).json({ message: 'A user with this email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.request()
            .input('username', sql.NVarChar, username)
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, hashedPassword)
            .input('role', sql.NVarChar, role || 'buyer')
            .query('INSERT INTO users (username, email, password, role) VALUES (@username, @email, @password, @role)');

        res.status(201).json({ message: 'User successfully registered!' });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const pool = await poolPromise;

        const userResult = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT * FROM users WHERE email = @email');

        const user = userResult.recordset[0];

        if (!user) {
            return res.status(400).json({ message: 'Incorrect email or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: 'Incorrect email or password' });
        }

        res.status(200).json({
            message: 'Successful login',
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});



app.listen(5000, () => {
    console.log('Server running on port 5000');
})