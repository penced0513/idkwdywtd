const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Group, GroupMember } = require('../../db/models')

const router = express.Router();


router.post('/new', asyncHandler(async(req,res) => {
    const {name, userId} = req.body
    const groupPic = "https://developer.jboss.org/images/jive-sgroup-default-portrait-large.png"
    const group = await Group.create({owner: userId, name, groupPic}, {
        include: {
            model: User
        }
    })

    await GroupMember.create({ userId, groupId: group.id})
    return res.json(group)
}))


module.exports = router;
