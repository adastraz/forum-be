
exports.up = function(knex) {
    return knex.schema
        .createTable('posts', tbl => {
            tbl.increments()
            tbl.string('title', 50)
                .notNullable()
            tbl.string('post')
                .notNullable()
            tbl.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .notNullable()
            tbl.string('user_username')
                .unsigned()
                .references('username')
                .inTable('users')
                .notNullable()
            tbl.string('user_profile_img')
                .unsigned()
                .references('profile_img')
                .inTable('users')
                .notNullable()
            
        })
}

exports.down = function(knex) {
    
}
