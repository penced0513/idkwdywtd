const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Group, GroupMember } = require('../../db/models');

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
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
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
  module.exports = router;
