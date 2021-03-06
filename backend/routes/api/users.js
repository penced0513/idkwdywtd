const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Group, GroupMember, Attendee, Event } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .isLength({ max:12 })
      .withMessage("Username has a max of 12 characters"),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  check('password')
    .isLength({ max: 30 })
    .withMessage('Password must be 30 characters or less.'),
  handleValidationErrors,
];

router.get('/', asyncHandler(async(req, res) => {
  
  const users = await User.findAll()
  
  return res.json(users)
}))

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    profilePic = "https://sociology.columbia.edu/themes/custom/columbia/assets/img/people-default.svg"
    const user = await User.signup({ email, username, password, profilePic });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

router.get('/:userId/groups', asyncHandler(async(req,res) => {
  const {userId} = req.params

  const groupmember = await GroupMember.findAll({
    where: {
      userId,
      accepted: true
    },
    include: {
      model: Group
    }
  })

  return res.json(groupmember)
}))

router.get('/:userId/events', asyncHandler(async(req,res) => {
  const {userId} = req.params

  const groupmember = await Attendee.findAll({
    where: {
      userId,
      accepted: true
    },
    include: {
      model: Event
    }
  })

  return res.json(groupmember)
}))

router.get('/:userId/groups/invited', asyncHandler(async(req,res) => {
  const {userId} = req.params

  const invites = await GroupMember.findAll({
    where: {
      userId,
      accepted: null
    },
    include: {
      model: Group
    }
  })

  return res.json(invites)
}))


router.get('/:userId/events/invited', asyncHandler(async(req,res) => {
  const {userId} = req.params
  
  const groupmember = await Attendee.findAll({
    where: {
      userId,
      accepted: null
    },
    include: {
      model: Event
    }
  })

  return res.json(groupmember)
}))

router.delete('/:userId/groups/:groupId/reject', asyncHandler(async(req,res) => {
  const {userId, groupId} = req.params

  const invite = await GroupMember.findOne({where: {userId, groupId}})
  await invite.destroy()

  return res.json("deleted")
}))

router.delete('/:userId/events/:eventId/reject', asyncHandler(async(req,res) => {
  const {userId, eventId} = req.params

  const invite = await Attendee.findOne({where: {userId, eventId}})
  await invite.destroy()

  return res.json("deleted")
}))



  module.exports = router;
