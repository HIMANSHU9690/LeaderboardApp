import express from 'express';
import { claimPoints} from '../controllers/claimController.js';

const router = express.Router();

router.post('/:userId', claimPoints); 

export default router;

