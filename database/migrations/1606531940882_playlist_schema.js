'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaylistSchema extends Schema {
  up () {
    this.create('playlists', (table) => {
      table.increments('playlists_id')
      table.string('id_song',255).notNullable()
      table.integer('user_id',200).unsigned()
      table.timestamps()

      table
      .foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('playlists')
  }
}

module.exports = PlaylistSchema
