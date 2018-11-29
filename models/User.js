const db = require('./db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class User {
// CREATE
    constructor(id, name, email, password){
        this.id = id,
        this.name = name,
        this.email = email,
        this.password = password
    }

    static add(name, email, password){
        // ADD BCRYPT FUNCTIONALITY
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        return db.one(
            `insert into users
            (name, email, password)
            values
            ($1,$2,$3)
            returning id`, [name, email, hash]
            )
                    .then(data => {
            const u = new User(data.id, name, email, hash);
            return u;
        })
    }

    // RETRIEVE
    static getAll(){
        return db.any(
            `select * from users`
        );
    }

    static getById(id){
        return db.one(
            `select * from users where id=$1`,[id]
        )
        .then(result => {
            const u = new User(result.id, result.name, result.email);
            return u;    
        })
    }

    static getByEmail(email) {
        return db.one(`
            select * from users where email ilike '$1:raw'`, [email])
            .then(result => {
                const u = new User(result.id, result.name, result.email, result.password);
                return u;
            });
    }

    checkPassword(password){
        return bcrypt.compareSync(password, this.password);
    }

    // UPDATE
    updateName(newName){
        return db.result(
            `update users 
            set name = $1
            where id = $2`,
            [newName, this.id]
        )
    }

    updateEmail(newEmail){
        return db.result(
            `update users 
            set email = $1
            where id = $2`,
            [newEmail, this.id]
        )
    }

    // DELETE
    static deleteUser(id){
        return db.result(
            `delete * from users where id = $1`,[id]
        );
    }
}

module.exports = User;