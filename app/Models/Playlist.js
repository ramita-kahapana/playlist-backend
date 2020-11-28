'use strict'
const moment = require('moment');

const my_moment = moment('2018-06-01','YYYY-MM-DD');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Playlist extends Model {
  static get primaryKey(){
    return 'playlists_id'
}
static get createdAtColumn() {
    return 'created_at'; //format date

}
static get updatedAtColumn(){
    return 'updated_at' ; //format date
}
user(){
    return this.belongsTo('App/Models/User')
}

}

module.exports = Playlist
