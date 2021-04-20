exports.createPostValidator = (req, res, next) => {
    req.check('title', "Write a title").notEmpty()
    req.check('title', 'title must be in between 5 to 150 characters.').isLength({
        min: 5, max: 150
    });

    //body
    req.check('body', "Write a Body").notEmpty()
    req.check('body', 'Body must be in between 5 to 2000 characters.').isLength({
        min: 5, max: 2000
    });

    //check for errors
    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map((err) => err.msg)[0];
        return res.status(400).json({error: firstError});
    }

    // proceed to next middleware
    next();
}