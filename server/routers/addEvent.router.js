const router = require('express').Router();
const multer = require('multer');
const {
  Event, Type, Place, Owner,
} = require('../db/models');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/eventPhoto/');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

router
  .route('/')
  .post(upload.single('file'), async (req, res) => {
    try {
      const {
        name, date, info, owner_id, type, place, link,
      } = req.body;
      const { filename } = req.file;
      // добавляем в место инфу и адрес
      // console.log('============================');
      const [event, createdPLace] = await Event.findOrCreate({
        where: { name },
        defaults: {
          type_id: type,
          info,
          place_id: place,
          date,
          link,
          photo: filename,
        },
      });
      const allEvents = await Event.findAll({
        include: [Type, { model: Place, include: Owner }],
        raw: true,
      });
      res.json({ allEvents });
      // res.sendStatus(200);
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;
