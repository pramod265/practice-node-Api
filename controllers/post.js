const Post = require('../models/post')

module.exports.getPosts = (req, res) => {
    const posts = Post.find()
    .then((posts) => {
        res.status(200).json({
            posts: posts
        });
    })
    .catch((err) => {
        console.log(err);
    })   

}

module.exports.createPost = (req, res) => {
    const post = new Post(req.body);

    post.save()
    .then(result => {
        res.status(201).json({
            post: result
        })
    });
}

// exports works directly without module.exports also
exports.getAbout = (req, res) => {
    const json_data = {
        "Name": "Pramod Gupta",
        "About": " 💗 to Build & Code !"
    };
    res.json(json_data);
}



// console.log("Creating Post: ", post);
// post.save((err, result) => {
//     if(err){
//         return res.status(400).json({
//             error: err
//         })
//     } 
//     res.status(201).json({
//         post: result
//     })
// });
