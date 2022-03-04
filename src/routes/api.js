const router = require('express').Router();
const apiPlantasRouter = require('./apis/plantasApiRoutes');
const apiUsersRouter = require('./apis/usersApiRoutes');
const apiAuthRouter = require('./apis/authApiRoutes');

router.use('/users', apiUsersRouter);
router.use('/plantas', apiPlantasRouter);
router.use('/auth', apiAuthRouter);


module.exports = router;