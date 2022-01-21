import {Router} from 'express';
const router = Router();

import * as plantasApiController from '../../controllers/apis/plantasApiController';

router.post('/', plantasApiController.createPlanta);
router.get('/', plantasApiController.getPlantas);
router.get('/:plantaId', plantasApiController.getPlantaById);
router.put('/:PlantaId', plantasApiController.updatePlantaById);
router.delete('/:plantaId', plantasApiController.deletePlantaById);


module.exports = router;