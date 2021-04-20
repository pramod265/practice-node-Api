const express = require('express');
const { getPosts, getAbout, createPost } = require('../controllers/post');
const validators = require('../validators/index')
const router = express.Router();

router.get('/', getPosts);
router.get('/about-us', getAbout);
router.post('/create-post', validators.createPostValidator, createPost);



module.exports = router;