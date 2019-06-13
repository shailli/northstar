const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/login.controller');
const goal_controller = require('../controllers/goal.controller');

router.get('/', user_controller.test);
router.get('/getGoals', goal_controller.getGoal);
router.get('/goal/:goalId', goal_controller.goalLandingDetail);
module.exports = router;
