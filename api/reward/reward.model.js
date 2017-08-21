'use strict'
import db from '../../config/db.config';

class Reward {
  constructor() {
    this.db = db;
  }

  create(name) {
    return new Promise((fulfill, reject) => {
      let sql = `insert into rewards (rewardName) value('${name}')`;
      this.db.query(sql, (err, row) => {
        if(err)
          reject(err);
        else {
          fulfill(row.insertId);
        }
      });
    });
  }

  remove(rewardId) {
    return new Promise((fulfill, reject) => {
      let sql = `update rewards set active = 2 where rewardId = ${rewardId}`;
      this.db.query(sql, (err, row) => {
        if(err)
          reject(err);
        else {
          fulfill("Member deleted");
        }
      });
    });
  }
}

export default Reward;
