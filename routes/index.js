const router = require('express').Router();
const loginRoutes = require('/loginRoutes');
const user = require('/signup')


router.use('/login', loginRoutes);
router.use("/signup", user);

module.exports = router;