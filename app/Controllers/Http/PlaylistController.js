'use strict'

const Playlist = use('App/Models/Playlist')

class PlaylistController {
  async index( {request }) {
    const {references = undefined} = request.qs

    return {status : 200 ,error : undefined,data : Playlist.query().toJSON() }

  }

  async show({ request }) {
    const {id} =request.qs

    return {status : 200 ,error : undefined,data : Playlist.query().where({playlists_id : id}).fetch().toJSON() }

  }

  async store({ request }) {
    const {playlists_id} =  Playlist.create(request.body)

    return {status : 200 ,data : Playlist.query().where({playlists_id: playlists_id }).fetch().toJSON() }

  }
  async updateById( {request} ) {
    const {id} = request.qs

    let dataBefore = await Playlist.findBy({playlists_id :id})

    if(!dataBefore){
      return {status : 500 ,error : `Not Found ${ id }` , data : undefined};
    }
    dataBefore.merge(request.body)
    await dataBefore.save();

    return {status : 200 ,data : Playlist.query().where({playlists_id: playlists_id }).fetch().toJSON() }

  }
  async deletById( {request} ) {
    const {id} = request.qs

    let dataBefore = await Playlist.findBy({playlists_id :id})

    if(!dataBefore){
      return {status : 500 ,error : `Not Found ${ id }` , data : undefined};
    }
    dataBefore.delete()
    await dataBefore.save();

    return {status : 200 ,error : undefined , data : 'complete'};
  }

}

module.exports = PlaylistController
