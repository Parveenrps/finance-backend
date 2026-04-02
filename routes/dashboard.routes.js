import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { allowRoles } from '../middlewares/role.middleware.js';
import { getSummary } from '../controllers/dashboard.controller.js';

const router = Router();

router.get("/summary", verifyToken, allowRoles("admin", "analyst"), getSummary);
export default router;
