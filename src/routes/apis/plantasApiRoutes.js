//import {Router} from 'express';
const {Router} = require("express");
const router = Router();

const {checkToken} = require('../../middlewares');

//import * as plantasApiController from '../../controllers/apis/plantasApiController';
const { createPlanta, getPlantas, getPlantaById, updatePlantaById, deletePlantaById } = require('../../controllers/apis/plantasApiController');

router.post('/', checkToken, createPlanta);
router.get('/', getPlantas);
router.get('/:plantaId', getPlantaById);
router.put('/:plantaId', checkToken, updatePlantaById);
router.delete('/:plantaId', checkToken, deletePlantaById);


module.exports = router;