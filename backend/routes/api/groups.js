const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser, requireAuth } = require('../../utils/auth');
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

router.get('/:groupId(\\d+)', asyncHandler(async(req,res) => {
    const {groupId} = req.params
    const group = await Group.findByPk(groupId, {
        include: {
            model: GroupMember,
            where: {
                accepted: true
            },
            include: {
                model: User
            },
        }
    })

    return res.json(group)
}))

router.delete('/:groupId(\\d+)', asyncHandler(async(req,res) => {

    const {groupId} = req.params
    const group = await Group.findByPk(groupId)

    await group.destroy()

    return res.json("Deleted")
}))

router.post('/:groupId(\\d+)/leave', asyncHandler(async(req,res) => {

    const { userId } = req.body
    const {groupId} = req.params
    const groupmember = await GroupMember.findOne({
        where: {
            userId, groupId
        }
    })

    await groupmember.destroy()

    return res.json("Deleted")
}))

router.get('/:groupId(\\d+)/pending', asyncHandler(async(req, res) => {

    const pendingInvites = await GroupMember.findAll({
        where: {
            accepted: null
        },
        include: {
            model: User
        }
    })
    return res.json(pendingInvites)
}))

module.exports = router;
