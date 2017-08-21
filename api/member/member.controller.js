'use strict'

import Member from './member.model';
const member = new Member();

function link(req, res, next) {
  let memberId = req.params.memberId;
  let rewardId = req.params.rewardId;
  let link = async (memberId, rewardId) => {
    let memberRewards = await member.link(memberId, rewardId);
    return memberRewards;
  }
  link(memberId, rewardId)
    .then((rewardLink) => {
      res.status(201).json(rewardLink);
    })
    .catch((err) => {
      res.status(400).json({err: err});
    })
}

function get(req, res, next) {
  let memberId = req.params.memberId;
  let get = async (memberId) => {
    let memberRewards = await member.get(memberId);
    return memberRewards;
  }
  get(memberId)
    .then((rewards) => {
      res.status(200).json(rewards);
    })
    .catch((err) => {
      res.status(400).json({err: err});
    })
}

function create(req, res, next) {
  let name = req.body.name;
  let mobile = req.body.mobile;
  let create = async (name, mobile) => {
    let memberId = await member.create(name, mobile);
    return memberId;
  }
  create(name, mobile)
    .then((memberId) => {
      res.status(201).json({
        memberId: memberId
      });
    })
    .catch((err) => {
      res.status(400).json({err: err});
    })
}

function remove(req, res, next) {
  let id = req.params.memberId;
  let remove = async (memberId) => {
    let msg = await member.remove(memberId);
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

export default {create, remove, get, link}
