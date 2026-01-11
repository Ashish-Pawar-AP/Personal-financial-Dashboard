import express, { Router } from 'express'
import isLoggedIn from '../middleware/auth.middleware.js'
import { getDashboardSummary } from '../controllers/dashboard.controller.js'


const router = Router()

router.route('/summary').get(isLoggedIn, getDashboardSummary)

export default router