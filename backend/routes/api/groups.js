const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');
const { User, Group, GroupMember } = require('../../db/models')

const router = express.Router();


router.post('/new', asyncHandler(async(req,res) => {
    const {name, userId} = req.body
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

router.get('/:groupId', asyncHandler(async(req,res) => {
    const {groupId} = req.params
    const group = await Group.findByPk(groupId, {
        include: {
            model: GroupMember,
            include: {
                model: User
            }
        }
    })

    return res.json(group)

}))

module.exports = router;
