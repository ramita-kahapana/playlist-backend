'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Playlist extends Model {
  static get primaryKey(){
    return 'playlists_id'
}
static get createdAtColumn() {
    return new Date(); //format date

}
static get updatedAtColumn(){
    return new Date(); //format date
}
user(){
    return this.belongsTo('App/Models/User')
}

}

module.exports = Playlist
