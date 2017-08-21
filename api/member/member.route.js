'use strict'

import express from 'express';
import member from './member.controller';
import validate from 'express-validation';
import paramValidate from '../../config/param-validate';
const router = express.Router();

router.route('/create')
  .post(validate(paramValidate.createMember), member.create);

router.route('/remove/:memberId')
  .delete(member.remove);

router.route('/rewards/:memberId/:rewardId')
  .put(validate(paramValidate.linkReward), member.link);

router.route('/rewards/:memberId')
  .get(member.get)

export default router;
