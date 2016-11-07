import express from 'express';
import { getTeamInfoById, getOverallTeamsStats } from './teams.controller';

const router = express.Router();

router.get('/', getOverallTeamsStats);
router.get('/:teamId', getTeamInfoById);

module.exports = router;
