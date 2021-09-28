const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser, requireAuth } = require('../../utils/auth');
const { User, Event, Attendee } = require('../../db/models')

const router = express.Router();


router.post('/new', asyncHandler(async(req,res) => {
    const {name, userId, duration, startDate} = req.body
    const eventPic = "https://www.vhv.rs/dpng/d/487-4871907_grey-x-icon-png-transparent-png.png"
    const event = await Event.create({host: userId, name, eventPic, duration, startDate})

    await Attendee.create({ userId, eventId: event.id, accepted: true})

    const createdEvent = await Event.findByPk(event.id, {
        include: {
            model: Attendee,
            include: {
                model: User
            }
        }
    })

    return res.json(createdEvent)
}))

router.get('/:eventId(\\d+)', asyncHandler(async(req,res) => {
    const {eventId} = req.params
    const event = await Event.findByPk(eventId, {
        include: {
            model: Attendee,
            where: {
                accepted: true
            },
            include: {
                model: User
            },
        }
    })

    return res.json(event)
}))

router.put('/:eventId(\\d+)', asyncHandler(async(req,res) => {

    const {eventId} = req.params
    const {eventName, eventPic, duration, startDate} = req.body
    const event = await Event.findByPk(eventId,{
        include: {
            model: Attendee,
            where: {
                accepted: true
            },
            include: {
                model: User
            },
        }
    })

    await event.update({ name: eventName, eventPic, duration, startDate})


    return res.json(event)
}))

router.delete('/:eventId(\\d+)', asyncHandler(async(req,res) => {

    const {eventId} = req.params
    const event = await Event.findByPk(eventId)

    await event.destroy()

    return res.json("Deleted")
}))

router.post('/:eventId(\\d+)/leave', asyncHandler(async(req,res) => {

    const { userId } = req.body
    const {eventId} = req.params
    const attendee = await Attendee.findOne({
        where: {
            userId, eventId
        }
    })

    await attendee.destroy()

    return res.json("Deleted")
}))

router.get('/:eventId(\\d+)/pending', asyncHandler(async(req, res) => {

    const {eventId} = req.params
    const pendingInvites = await Attendee.findAll({
        where: {
            accepted: null,
            eventId
        },
        include: {
            model: User
        }
    })
    return res.json(pendingInvites)
}))

router.post('/:eventId(\\d+)/invite', asyncHandler(async(req,res) => {

    const { userId } = req.body
    const { eventId } = req.params

    const invite = await Attendee.create({ eventId, userId}, {
        include: {
            model: User
        }
    })
    const newInvite = await Attendee.findByPk(invite.id, {
        include: {
            model: User
        }
    })

    return res.json(newInvite)

}))


router.post('/:eventId(\\d+)/uninvite', asyncHandler(async(req,res) => {

    const { userId } = req.body
    const { eventId } = req.params

    const invite = await Attendee.findOne({
        where: { eventId, userId}, 
    })
   
    await invite.destroy()
    

    return res.json("deleted")

}))

router.post('/:eventId(\\d+)/remove', asyncHandler(async(req,res) => {

    const { userId } = req.body
    const { eventId } = req.params

    const invite = await Attendee.findOne({
        where: { eventId, userId}, 
    })
   
    await invite.destroy()
    

    return res.json("deleted")

}))

module.exports = router;
