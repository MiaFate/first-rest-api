const router = require('express').Router();
const apiPlantasRouter = require('./apis/plantasApiRoutes');
const apiUsersRouter = require('./apis/usersApiRoutes');

router.use('/users', apiUsersRouter);
router.use('/plantas', apiPlantasRouter);


module.exports = router;