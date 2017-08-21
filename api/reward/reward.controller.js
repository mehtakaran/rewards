'use strict'

import Reward from './reward.model';
const reward = new Reward();

function create(req, res, next) {
  let name = req.body.name;
  let create = async (name) => {
    let rewardId = await reward.create(name);
    return rewardId;
  }
  create(name)
    .then((rewardId) => {
      res.status(201).json({
        rewardId: rewardId
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({err: err});
    })
}

function remove(req, res, next) {
  let id = req.params.rewardId;
  let remove = async (memberId) => {
    let msg = await reward.remove(rewardId);
    return msg;
  }
  remove(id)
    .then((msg) => {
      res.status(202).json({
        msg: msg
      })
    })
    .catch((err) => {
      res.status(400).json({err: err});
    })
}

export default {create, remove}
