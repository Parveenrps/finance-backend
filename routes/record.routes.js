import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { allowRoles } from '../middlewares/role.middleware.js';
import { createRecord, getRecords, updateRecord, deleteRecord } from '../controllers/record.controller.js';
const router = Router();

router.post("/", verifyToken, allowRoles("admin"), createRecord);
router.get("/", verifyToken, allowRoles("admin", "analyst"), getRecords);
router.put("/:id", verifyToken, allowRoles("admin"), updateRecord);
router.delete("/:id", verifyToken, allowRoles("admin"), deleteRecord);

export default router;
