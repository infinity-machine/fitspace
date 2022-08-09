const post_router = require('express').Router();
const { isLoggedIn } = require('./helpers');
const User = require('../models/User');
const Saved = require('../models/Saved')

    post_router.post('/save', (req, res) => {

        // User.findByPk(req.session.user_id,{include: Saved}).then(user => {
    
        User.findByPk(req.session.user_id).then(user => {
            user.createSaved(
                {
                    bodyPart: req.body.bodyPart,
                    equipment: req.body.equipment,
                    gifUrl: req.body.gifUrl,
                    id: req.body.id,
                    name: req.body.name,
                    target: req.body.target
                }
            ).then(new_saved => {
                res.json(new_saved)
                // console.log(res)
            })
        })
    })


  //  //---------------------------ATTEMPT AT GETTING SAVED ATTACHED TO USER----------------------------------
    // post_router.get('/findsaved', (req, res) => {

    //     User.findByPk(req.session.user_id,
    //         {
    //             include: Saved

    //         }).then(saved => {
    //             res.json(saved)
    //             console.log(saved)
    //         })
    //     })

    
module.exports = post_router