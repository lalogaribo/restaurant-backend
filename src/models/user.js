const db = require('../config/config');

const User = {};

User.create = (user, result) => {
    const sql = `
        INSERT INTO users(
                          name,
                          last_name,
                          email,
                          phone_number,
                          image,
                          password,
                          created_at,
                          updated_at
        )
        VALUES (?, ?, ? ,? ,? ,?, ?, ?)
    `;

    db.query
    (
        sql,
        [
            user.name,
            user.last_name,
            user.email,
            user.phone_number,
            user.image,
            user.password,
            new Date(),
            new Date()
        ],
        (err, result) => {
            if (err){
                console.log('Error: ', err)
                result(err, null)
            } else {
                console.log(`ID del nuevo usuario ${result.insertId}`)
                result(null, result.insertId)
            }
        }
    )
}

module.exports = User;