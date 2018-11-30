const db = require("./db");

class Expense {
  constructor(id, amount, date) {
    (this.id = id), (this.amount = amount), (this.date = date);
  }

  static add(amount, date, account_id) {
    db.one(
      `insert into expenses
            (amount, date, account_id)
            values
            ($1,$2,$3)
            returning id`,
      [amount, date, account_id]
    ).then(data => {
      const i = new Expense(data.id, amount, account, date, account_id);
      return i;
    });
  }

  static getById(id) {
    db.one(
      `select * from expenses 
            where id=$1`,
      [id]
    ).then(result => {
      const i = new Expense(result.id, result.amount, result.date);
      return i;
    });
  }

  static getByUser(user_id) {
    return db.any(
      `select * from expenses 
                where user_id = $1`,
      [user_id]
    );
  }

  static getByDate(date, user_id) {
    db.one(
      `select * from expenses 
            where date=$1
            AND 
            account_id=$2`,
      [date, user_id]
    ).then(result => {
      const i = new Expense(result.id, result.amount, result.date);
      return i;
    });
  }

  static delete(date, id) {
    db.result(
      `delete * from expenses
            where 
            date=$1 
            AND
            id=$2`,
      [date, id]
    );
  }
}

module.exports = Expense;
