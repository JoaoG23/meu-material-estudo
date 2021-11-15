const express = require('express');
const router = express.Router();

router.post('/register', ( req ,resp ) => { 
    console.log('register');
    resp.send('register');
});
router.post('/login', ( req ,resp ) => { 
    console.log('login');
    resp.send('login');
});

module.exports = router;