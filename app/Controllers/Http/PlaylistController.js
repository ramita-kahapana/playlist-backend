'use strict'

const Playlist = use('App/Models/Playlist')

class PlaylistController {
  async index( {request }) {

    return {status : 200 ,error : undefined, data :  await Playlist.query().fetch().then(response => response.toJSON()) }

  }

  async show({ request }) {
    const { id } = request.params

    return {status : 200 ,error : undefined, data :  await Playlist.query().where({playlists_id : id}).fetch().then(response => response.toJSON()) }

  }

  async store({ request }) {
    const {playlists_id} = await Playlist.create(request.body)
    console.log(playlists_id)

    return {status : 200 ,data : await Playlist.query().where({playlists_id: playlists_id }).fetch().then(response => response.toJSON())}

  }
  async update ( {request} ) {
    const { id } = request.params
    const {id_song} = request.body
    console.log(id)

    let dataBefore = await Playlist.findBy({playlists_id :id})

    if(!dataBefore){
      return {status : 500 ,error : `Not Found ${ id }` , data : undefined};
    }
    dataBefore.merge({id_song : id_song})
    await dataBefore.save();

    return {status : 200 ,data : await  Playlist.query().where({playlists_id: id }).fetch().then(response => response.toJSON())}

  }
  async destroy ( {request} ) {
    const { id } = request.params

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
