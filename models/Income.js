const db = require('./db');

class Income{
    constructor(id, amount, date){
        this.id = id,
        this.amount = amount,
        this.date = date
    }

    static add(amount, date, account_id){
        db.one(
            `insert into incomes
            (amount, date, account_id)
            values
            ($1,$2,$3)
            returning id`,
            [amount, date, account_id])
            .then(data => {
                const i = new Income(data.id, amount, account, date, account_id);
                return i;
            })
    }

    static getById(id){
        db.one(
            `select * from incomes 
            where id=$1`,[id]
        )        
        .then(result => {
            const i = new Income(result.id, result.amount, result.date);
            return i;
        })
    }

    static getByDate(date, account_id){
        db.one(
            `select * from incomes 
            where date=$1
            AND 
            account_id=$2`, [date, account_id]
        )
        .then(result => {
            const i = new Income(result.id, result.amount, result.date);
            return i;
        })
    }

    static delete(date, id){
        db.result(
            `delete * from incomes
            where 
            date=$1 
            AND
            id=$2`,[date, id]
        )
    }
}

module.exports = Income;