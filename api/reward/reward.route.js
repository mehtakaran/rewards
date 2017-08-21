'use strict'

import express from 'express';
import reward from './reward.controller';
import validate from 'express-validation';
import paramValidate from '../../config/param-validate';
const router = express.Router();

router.route('/create')
  .post(validate(paramValidate.createReward), reward.create);

router.route('/remove/:rewardId')
  .delete(reward.remove);

export default router;
