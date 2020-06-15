const express = require('express')
const BlogPost = require('../models/blogPost')

const router = express.Router()

router.get('/', (req, res) => {

    BlogPost.find({})
        .then((data) => {
            //console.log('Data: ', data)
            res.json(data)
        })
        .catch((e) => {
            console.log(e)
        })

})

router.post('/save', (req, res) => {
    console.log('Done : ', req.body)
    const data = req.body
    const newBlogPost = new BlogPost(data)

    newBlogPost.save((error) =>{
        if(error){
            res.status(500).json({msg: 'Server Error'})
        }else{
            res.json({
                msg: 'Received!!'
            })
        }
    })

})

module.exports = router