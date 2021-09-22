const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Group, GroupMember } = require('../../db/models')

const router = express.Router();


router.post('/new', asyncHandler(async(req,res) => {
    const {name, userId} = req.body
    console.log('name', name)
    const groupPic = "https://developer.jboss.org/images/jive-sgroup-default-portrait-large.png"
    const group = await Group.create({owner: userId, name, groupPic})

    await GroupMember.create({ userId, groupId: group.id})

    const createdGroup = await Group.findByPk(group.id, {
        include: {
            model: GroupMember
        }
    })
    return res.json(createdGroup)
}))


module.exports = router;
