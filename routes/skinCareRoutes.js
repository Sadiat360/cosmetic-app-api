import express from 'express';
import fs from 'fs';
const router = express.Router();


router.get('/', (req, res) => {

    const dataBuffer = fs.readFileSync('./data/SkinCare.json');
    const SkinCareData = JSON.parse(dataBuffer);

    res.send(SkinCareData);
});

export default router;