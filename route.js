import e from 'express'
export const meRoute = e.Router()
import { meController } from './me.controller.js'

meRoute.get('/', meController)