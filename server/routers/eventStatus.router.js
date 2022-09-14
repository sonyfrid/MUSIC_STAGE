/* eslint-disable quotes */
/* eslint-disable camelcase */
const router = require('express').Router();
const { EventStatus } = require('../db/models');

// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await EventStatus.findAll({
//       where: {
//         artist_id: id,
//       },
//     });
//     res.json({ data });
//   } catch (error) {
//     console.error(error);
//     res.status(418);
//   }
// });

router.get('/', async (req, res) => {
  try {
    const data = await EventStatus.findAll();
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(418);
  }
});

router.post('/', async (req, res) => {
  const { event_id, artist_id, message } = req.body;
  console.log("🚀 ~ file: eventStatus.router.js ~ line 33 ~ router.post ~ message", event_id, artist_id, message);
  if (event_id && artist_id && message) {
    try {
      const [eventStatus] = await EventStatus.findOrCreate({
        where: {
          event_id,
          artist_id,
        },
        defaults: {
          message,
        },
      });
      res.json({ eventStatus });
    } catch (error) {
      console.error(error);
      res.status(418);
    }
  }
});

router.patch('/', async (req, res) => {
  const { event_id, artist_id, status } = req.body;
  console.log("🚀 ~ file: eventStatus.router.js ~ line 54 ~ router.patch ~ status", event_id, artist_id, status);
  if (event_id && artist_id) {
    try {
      const eventStatus = await EventStatus.findOne({
        where: {
          event_id,
          artist_id,
        },
      });
      await eventStatus.update({ status });
      const allEventStatus = await EventStatus.findAll({
        where: {
          artist_id,
        },
      });
      res.json({ allEventStatus });
    } catch (error) {
      console.error(error);
      res.status(418);
    }
  }
});

module.exports = router;
