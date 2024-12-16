import express from 'express';
import fs from 'fs';
const router = express.Router();



router.get('/', (req, res) => {
    // res.send('Welcome to melissa product route');

    const dataBuffer = fs.readFileSync('./data/products.json');
    const productsData = JSON.parse(dataBuffer);

    res.send(productsData);
});


export default router;