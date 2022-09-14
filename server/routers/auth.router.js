const { Router } = require('express');
const multer = require('multer');
const authController = require('../controllers/auth.controller');
const checkAuth = require('../middleware/checkAuth');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/photo/');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

const authRouter = Router();

authRouter.post('/signup', upload.single('photo'), authController.signUp);
authRouter.post('/signin', authController.signIn);
authRouter.get('/signout', authController.signOut);
authRouter.get('/check', checkAuth, authController.checkAuth);

module.exports = authRouter;
