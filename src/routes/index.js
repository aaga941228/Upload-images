const { Router } = require("express");
const controllers = require('../controllers')

const router = Router();

router
  .get("/", controllers.redirectIndex)
  .get('/images/upload', controllers.renderIndex)
  .post('/images/upload', controllers.upload, controllers.uploadImage)

module.exports = router;
