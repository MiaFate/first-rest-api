const router = require('express').Router();
const apiPlantasRouter = require('./apis/plantasApiRoutes');

router.use('/plantas', apiPlantasRouter);

module.exports = router;