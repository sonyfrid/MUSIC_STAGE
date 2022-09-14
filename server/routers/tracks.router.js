const router = require('express').Router();
const {
  Track,
} = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    const allTracks = await Track.findAll();
    console.error(allTracks);
    res.json({ allTracks });
  });
// .post(async (req, res) => {
//   const allTracks = await Track.create({name:});
//   res.json({ allTracks });
// });

module.exports = router;
