import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';


const app = express();
const PORT = process.env.PORT || 7070;

app.use(cors());
app.use(express.json()); // makes req.body accessible for POST requests
app.use(express.static('public'));

//Routes

app.use('/products', productRoutes );



/// Base Url
app.get('/', (req,res) => {
    res.send('Melissa base url');
});

//local host

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});