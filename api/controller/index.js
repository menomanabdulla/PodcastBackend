const Podcasts  = require('../model')

module.exports.getallController  = (req,res,next) =>{
    Podcasts.find()
    .then(data =>{
        res.json({
            msg: 'All Podcast List',
            lenght: data.length,
            data
        })
    })
    .catch(err=>{
        res.json({
            msg: 'error occured'
        })
    })
}


module.exports.getSingleController  = (req,res,next) =>{
    const type = req.params.type
    Podcasts.findOne({podcastType:type})
    .then(data =>{
        res.json({
            msg: 'Common Typed Podcast List',
            lenght: data.length,
            data
        })
    })
    .catch(err=>{
        res.json({
            msg: 'error occured'
        })
    })
}

module.exports.postController = (req,res,next)=>{
    const podcast = new Podcasts({
        podcastType: req.body.podcastType,
        podcastURL: req.body.podcastURL,
        podcastTitle: req.body.podcastTitle,
        podcastCreateDate: req.body.podcastCreateDate,
        podcastListenerNumber: req.body.podcastListenerNumber,
        podcastThumb: req.body.podcastThumb
    })
    podcast.save()
    .then(data=>{
        console.log(data)
        res.status(201).json({
            msg: 'Successfully added',
            movie: data
        })
    })
    .catch(err=>{
        condole.log(err)
        rest.status(500).josn({
            msg: 'Error occired'
        })
    })
}