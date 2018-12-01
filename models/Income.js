const db = require("./db");

class Income {
  constructor(id, amount, date) {
    (this.id = id), (this.amount = amount), (this.date = date);
  }

  static add(amount, description, date, user_id) {
    db.one(
      `insert into incomes
            (amount, description, date, user_id)
            values
            ($1,$2,$3,$4)
            `,
      [amount, description, date, user_id]
    ).then(data => {
      const i = new Income(data.id, amount, account, date, account_id);
      return i;
    });
  }

  static getById(id) {
    db.one(
      `select * from incomes 
            where id=$1`,
      [id]
    ).then(result => {
      const i = new Income(result.id, result.amount, result.date);
      return i;
    });
  }

  static getByUser(user_id) {
    return db.any(
      `select * from incomes 
                where user_id = $1`,
      [user_id]
    );
  }

  static getByDate(date, user_id) {
    db.one(
      `select * from incomes 
            where date=$1
            AND 
            account_id=$2`,
      [date, user_id]
    ).then(result => {
      const i = new Income(result.id, result.amount, result.date);
      return i;
    });
  }

  static delete(date, id) {
    db.result(
      `delete * from incomes
            where 
            date=$1 
            AND
            id=$2`,
      [date, id]
    );
  }
}

module.exports = Income;
