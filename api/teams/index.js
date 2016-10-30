import express from 'express';
import { getTeamInfoById } from './teams.controller';

const router = express.Router();

router.get('/:teamId', getTeamInfoById);

module.exports = router;
