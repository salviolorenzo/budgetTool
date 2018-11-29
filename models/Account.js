const db = require('./db');

class Account {

    constructor(id, amount){
        this.id = id,
        this.amount = amount
    }

    // CREATE
    static add(amount, user_id){
        return db.one(
            `insert into accounts
            (amount, user_id)
                values
                ($1,$2),
                returning id`,
                [amount, user_id]
                .then(result => {
                    const a = new Account(result.id, amount, user_id)
                    return a;
                })
        )
    }

    // RETRIEVE
    static getAll(){
        return db.any(
            `select * from accounts`
        )
    }

    static getByUser(user_id){
        return db.any(
            `select * from accounts 
            where user_id = $1`,[user_id]
        )
    }

    static getByDate(user_id, date){
        return db.any(
            `select * from accounts 
            where user_id = $1
            AND
            date = $2`, [user_id, date]
        )
    }
    // UPDATE
    static updateBalance(user_id, amount){
        return db.result(
            `update accounts
            set amount =$1
            where user_id = $2`, [user_id, amount]
        )
    }

    // DELETE
}

module.exports = Account;