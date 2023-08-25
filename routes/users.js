const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('users', { users : "users" });
});

router.get('/:id', (req, res) => {
    let userId = req.params.id;
    res.render('users', { users : "users" , id : userId });
});


router.post('/', (req, res) => {

});


module.exports = router;
