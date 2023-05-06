const express = require('express')
const PostModel = require('../models/post.model')
const postRoute = express.Router()

postRoute.get('/posts', async (req, res) => {
    try{
        const posts = await PostModel.find();
        res.json(posts)
    }
    catch(error){
       console.log(error);
       res.json({ error: 'Error while getting posts'})

    }
})


postRoute.post('/post', async(req, res)=>{
const {authorName, noticeTitle, noticeDescription}= req.body;
try {
    const post = new PostModel({authorName, noticeTitle, noticeDescription})
    const newPost = await post.save()
    res.json(newPost);
    console.log(newPost);
} catch (error) {
    console.log(error);
       res.json({ error: 'Error while creating posts'})
}
})

postRoute.put('/post/:id', async(req, res)=> {
    const id = req.params.id;
    const {authorName, noticeTitle, noticeDescription}= req.body;
    try {
        const modifiedPost = await PostModel.findByIdAndUpdate(id, {authorName, noticeTitle, noticeDescription})
        res.json(modifiedPost)
    } catch (error) {
        console.log(error);
        res.json({ error: 'Error while updating posts'})
    }


});

postRoute.delete('/post/:id', async(req, res)=> {
    const id = req.params.id;
    
    try {
        const delPost = await PostModel.findByIdAndDelete(id)
        res.json(delPost)
    } catch (error) {
        console.log(error);
        res.json({ error: 'Error while deleting posts'})
    }
});


module.exports= {postRoute}