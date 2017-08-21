import Joi from 'joi';

export default {
  createMember: {
    body: {
      name: Joi.string().required(),
      mobile: Joi.number().required()
    }
  },
  createReward: {
    body: {
      name: Joi.string().required()
    }
  },
  linkReward: {
    params: {
      memberId: Joi.number().required(),
      rewardId: Joi.number().required()
    }
  }
};
