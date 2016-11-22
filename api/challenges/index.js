import express from 'express';
import challengesController from './challenges.controller';

const router = express.Router();

router.get('/:challengeId', challengesController.getChallengeInfoById);

module.exports = router;
