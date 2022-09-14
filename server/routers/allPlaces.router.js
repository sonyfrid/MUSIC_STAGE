const router = require('express').Router();
const multer = require('multer');
const { Place, Photo } = require('../db/models');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/photoOwner/');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

router
  .route('/')
  .get(async (_, res) => {
    try {
      const allPlaces = await Place.findAll();
      res.json({ allPlaces });
    } catch (error) {
      console.log(error);
    }
  })
  .post(upload.single('file'), async (req, res) => {
    try {
      const {
        id, name, location, info,
      } = req.body;
      const { filename } = req.file;
      // добавляем в место инфу и адрес
      const [place, createdPLace] = await Place.findOrCreate({
        where: { name },
        defaults: {
          location,
          info: info[0],
          owner_id: id,
          photo: filename,
        },
      });
      console.log('--place', place);
      // добавляем фото и йд
      const [photo, createdPhoto] = await Photo.findOrCreate({
        where: { photo: req.file.filename },
        defaults: {
          place_id: place.id,
        },
      });
      console.log('-file------>>', place);
      res.json({ place });
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;
