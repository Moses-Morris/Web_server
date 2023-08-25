const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true })); //Allows us to safely pass and submit data from the forms we have.

// Posts Model
router.get('/', (req, res) => {
    res.render('posts', { posts : "posts" });
});

router.get('/:id', (req, res) => {
    let postId = req.params.id;
    res.render('posts', { posts : postId });
});

//create new post
router.post('/', (req, res) => {
    if (req.body.email === undefined) {
       // res.status(400).send("Please enter a valid email address");
        res.render('posts', { error : "Please enter a valid email address" });
    }else{
        let data = req.body.email;
        res.render('posts', { posts : req.body.email });
        console.log(data);
    }
    
});



module.exports = router;