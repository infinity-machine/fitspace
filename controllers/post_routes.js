const post_router = require('express').Router();
const { isLoggedIn } = require('./helpers');
const User = require('../models/User');
const Saved = require('../models/Saved')

post_router.post('/save', (req, res) => {

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

module.exports = post_router