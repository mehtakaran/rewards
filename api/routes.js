'use strict'

import memberRoute from './member/member.route';
import rewardRoute from './reward/reward.route';

module.exports = (app) => {
  app.use('/members', memberRoute);
  app.use('/rewards', rewardRoute);
}
