const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/login.controller');
const goal_controller = require('../controllers/goal.controller');
const feed_controller = require('../controllers/feed.controller');

router.post('/login', user_controller.login);
router.get('/getGoals', goal_controller.getGoal);
router.get('/goal/:goalId', goal_controller.goalLandingDetail);
router.get('/createfeed', feed_controller.create);
router.get('/likefeed', feed_controller.like);
router.get('/editfeed', feed_controller.edit);
module.exports = router;
