const path = require('path');
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../public/uploads'),
  filename:  (req, file, cb) => {
      cb(null, file.originalname);
  }
})

const upload = multer({
  storage,
  limits: {fileSize: 1000000}
}).single('image');

module.exports = {
  renderIndex: (req, res) => {
    res.render('index')
  },
  redirectIndex: (req, res) => {
    res.redirect("/images/upload");
  },
  upload,
  uploadImage: (req, res) => {
    const { file } = req
    console.log(file)
    res.send('ok')
  }

}