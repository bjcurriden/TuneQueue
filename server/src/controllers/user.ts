import { Friend } from "../models/Friend";
import { Playlist } from "../models/Playlist";
import { Request, Response }  from 'express';


export async function saveToQueue(req: Request, res: Response) {
  try {
    const newPlaylist = new Playlist({
      name: req.body.name,
      img: req.body.image,
      owner: req.body.owner,
    });
    await newPlaylist.save();
    res.status(201)
    res.send(newPlaylist);
  } catch {
    res.status(400)
    res.send("unable to add to queue")
  }
}

export async function getQueue(req: Request, res: Response) {
  try {
    const playlists = await Playlist.find()
    res.status(200)
    res.send(playlists)
  }
  catch (error) {
    res.status(500)
    res.send({ msg: `Unable to get your queue` })
  }
}

export async function removeFromQueue(req: Request, res: Response) {
  try {
    const name = req.params.name;
    const playlist = await Playlist.deleteOne({ name: name }).exec()
    console.log(playlist)
    res.status(202)
    console.log("deleted successfully")

  } catch (error) {
    console.log("error deleting")
  }
}


export async function getFriends(req: Request, res: Response) {
  try {
    const friends = await Friend.find()
    res.status(200)
    res.send(friends)
  }
  catch (error) {
    res.status(500)
    res.send({ msg: `Unable to get your friends` })
  }
}

export async function addFriend(req: Request, res: Response) {
  try {
    console.log(req.body.name)
    const newFriend = new Friend({
      name: req.body.name,
      image: req.body.image,
      id: req.body.id,
    });
    await newFriend.save();
    res.status(201)
    res.send(newFriend);
  } catch {
    res.status(400)
    res.send("unable to add friend")
  }
}

export async function removeFriend(req: Request, res: Response) {
  try {
    const name = req.params.name;
    const exFriend = await Friend.deleteOne({ name: name }).exec()
    console.log(exFriend)
    res.status(202)
    console.log("removed friend successfully")

  } catch (error) {
    console.log("error deleting")
  }
}

