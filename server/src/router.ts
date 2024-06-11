import { Router } from 'express';
const router: Router = Router();
import { grantCode, refreshToken } from "./controllers/playlist";
import { saveToQueue, getQueue, removeFromQueue, getFriends,addFriend, removeFriend} from "./controllers/user"


router.post('/refresh', refreshToken)

router.post('/login', grantCode)

router.post('/queue', saveToQueue)

router.get("/queue", getQueue)

router.delete('/queue/:name', removeFromQueue)

router.get("/friend", getFriends)

router.post('/friend', addFriend)

router.delete('/friend/:name', removeFriend)


export default router;