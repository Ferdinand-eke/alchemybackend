import express from 'express';
import { login, register, registerEnairaUser } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/register_enairauser', registerEnairaUser);
router.post('/login', login);

export default router;
