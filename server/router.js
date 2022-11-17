const { Router } = require('express');
const router = new Router();
const SpotifyWebApi = require("spotify-web-api-node");
const apiController = require('./controllers/playlist')
const userController = require("./controllers/user")


router.post('/refresh', apiController.refreshToken)

router.post('/login', apiController.grantCode)

router.post('/queue', userController.saveToQueue)

router.get("/queue", userController.getQueue)

router.delete('/queue/:name', userController.removeFromQueue)

router.get("/friend", userController.getFriends)

router.post('/friend', userController.addFriend)

router.delete('/friend/:name', userController.removeFriend)


module.exports = router;