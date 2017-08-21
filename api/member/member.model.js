'use strict'
import db from '../../config/db.config';

class Member {
  constructor() {
    this.db = db;
  }

  create(name, mobile) {
    return new Promise((fulfill, reject) => {
      let sql = `insert into members (memberName, mobile) value('${name}', ${mobile})`;
      this.db.query(sql, (err, row) => {
        if(err)
          reject(err);
        else {
          fulfill(row.insertId);
        }
      });
    });
  }

  get(memberId) {
    return new Promise((fulfill, reject) => {
      let sql = `select
                m.memberId,
                m.memberName,
                m.mobile,
                r.rewardId,
                r.rewardName
                from members m
                JOIN memberRewards mr on m.memberId = mr.memberId AND mr.active = 1
                JOIN rewards r on mr.rewardId = r.rewardId AND r.active = 1
                WHERE m.memberId = ${memberId} AND m.active = 1`;
      this.db.query(sql, (err, row) => {
        if(err)
          reject(err);
        else {
          fulfill(row);
        }
      })
    })
  }

  remove(memberId) {
    return new Promise((fulfill, reject) => {
      let sql = `update members set active = 2 where memberId = ${memberId}`;
      this.db.query(sql, (err, row) => {
        if(err)
          reject(err);
        else {
          fulfill("Member deleted");
        }
      });
    });
  }

  link(memberId, rewardId) {
    return new Promise((fulfill, reject) => {
      let sql = `insert into memberRewards (memberId, rewardId) values(${memberId}, ${rewardId})`;
      this.db.query(sql, (err, row) => {
        if(err)
          reject(err);
        else {
          fulfill("Reward linked to member");
        }
      });
    });
  }
}

export default Member
