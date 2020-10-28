
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments()
            tbl.string('username', 25)
                .notNullable()
                .unique()
            tbl.string('password', 50)
                .notNullable()
            tbl.string('bio')
            tbl.string('profile_img')
            tbl.string('nickname')
            tbl.string('user_type')
        })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
}
