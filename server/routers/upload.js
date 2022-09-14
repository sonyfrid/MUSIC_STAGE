const router = require('express').Router();
const multer = require('multer');
const { Track } = require('../db/models');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/music/');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post('/add', upload.single('file'), async (req, res) => {
  try {
    const { id } = req.body;
    const path = req.file.originalname;
    await Track.create({ track: path, artist_id: id });
    const allTracks = await Track.findAll();
    res.json(allTracks);
  } catch (error) {
    console.error(error);
  }
});

router.get('/alltracks', async (req, res) => {
  try {
    const allTracks = await Track.findAll();
    res.json({ allTracks });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/track/:id', async (req, res) => {
  try {
    const id = req.body?.id || req.params?.id;
    // console.log('fgfgfgf', id);
    await Track.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
