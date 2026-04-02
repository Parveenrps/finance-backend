import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { allowRoles } from '../middlewares/role.middleware.js';
import { getUsers, updateRole, updateStatus } from '../controllers/user.controller.js';

const router = Router();

router.get("/", verifyToken, allowRoles("admin"), getUsers);
router.patch("/:id/role", verifyToken, allowRoles("admin"), updateRole);
router.patch("/:id/status", verifyToken, allowRoles("admin"), updateStatus);    

export default router;
