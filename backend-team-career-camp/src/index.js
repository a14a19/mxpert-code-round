import app from './app.js';
import { connectToDatabase } from './db/connection.js';

// connection and listeners
const PORT = process.env.PORT || 5000;

connectToDatabase()
    .then(() => {
        app.listen(PORT, () => { console.log("Server is open & connected to db -> http://127.0.0.1:5000/team-career-camp") })
    })
    .catch((err) => {
        console.warn("connection:", err);
    })