import express from 'express';
import teamsController from './teams.controller';

const router = express.Router();

router.get('/all-time', teamsController.getAllTimeStats);
router.get('/yesterday', teamsController.getYesterdayStats);
router.get('/:teamId', teamsController.getTeamInfoById);
router.get('/', teamsController.getOverallTeamsStats);

module.exports = router;
