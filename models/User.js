const db = require('./db');


class User {
// CREATE
    static add(name, email, password){
        // ADD BCRYPT FUNCTIONALITY
        return db.any(
            `insert into users
            (name, email, password)
            values
            ($1,$2,$3)
            returning id`, [name, email, password]
        )
        .then(data => {
            const u = new User(data.id, name, email);
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
            }
        )
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