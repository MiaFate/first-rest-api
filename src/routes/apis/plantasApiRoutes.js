import {Router} from 'express';
const router = Router();

const {checkToken} = require('../../middlewares');

import * as plantasApiController from '../../controllers/apis/plantasApiController';

router.post('/', checkToken, plantasApiController.createPlanta);
router.get('/', plantasApiController.getPlantas);
router.get('/:plantaId', plantasApiController.getPlantaById);
router.put('/:plantaId', checkToken, plantasApiController.updatePlantaById);
router.delete('/:plantaId', checkToken, plantasApiController.deletePlantaById);


module.exports = router;