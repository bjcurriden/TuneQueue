import { Router } from 'express';
const router: Router = Router();
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


export default router;