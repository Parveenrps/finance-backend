import express from 'express'
// import cors from 'cors'
const app = express();

app.use(express.json());
// app.use(cors())

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import recordRoutes from './routes/record.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/records',  recordRoutes)
app.use('/api/dashboard', dashboardRoutes)

export default app