const express = require('express');
const asyncHandler = require('express-async-handler');
const {getCock }= require('../functions/funk.js')
const router = express.Router();

router.get(
    '/cocktails',
    asyncHandler(async (req, res) => {
        let res = await getCock();
        res.status(resulst.status).send(result.data);
    })
);

module.exports = router;
