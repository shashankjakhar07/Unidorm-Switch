import {Router} from 'express'
import * as controllers from '../controllers/appControllers.js'

const router=Router()


router.route('/createQuery').post(controllers.createQuery)
router.route('/updateQuery').post(controllers.updateQuery)
router.route('/deleteQuery').delete(controllers.deleteQuery)
router.route('/getUsers').get(controllers.getUsers)
router.route('/getByRollNo').get(controllers.getByRollNo)
router.route('/getUserByRollNo').get(controllers.getUserByRollNo)
router.route('/deleteRecord').delete(controllers.deleteRecord)

export default router