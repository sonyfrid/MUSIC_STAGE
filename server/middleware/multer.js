const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'music/');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}-${new Date()}`);
  },
});

module.exports = multer({ storage });
