/* eslint-disable no-console */
/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const multer = require('multer');
const { Artist, Owner } = require('../db/models');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/music/');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

const signUp = async (req, res) => {
  const {
    name,
    mail,
    pass,
    instagram,
    phone,
    info,
    vk,
    genre,
    genre_id_fs,
    telegram,
  } = req.body;
  const photo = req.file.filename;

  // signUp artist
  if (name && mail && pass && photo && instagram && phone && info && vk && genre && genre_id_fs) {
    try {
      const newUser = await Artist.create({
        name,
        mail,
        pass: await bcrypt.hash(pass, 10),
        photo,
        instagram,
        phone,
        info,
        vk,
        genre,
        genre_id_fs,
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
        type: 'artist',
      };

      return res.json({ id: newUser.id, name: newUser.name, type: 'artist' });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  // signUp owner
  if (name && mail && pass && photo && instagram && phone && info && telegram) {
    try {
      const newUser = await Owner.create({
        name,
        mail,
        pass: await bcrypt.hash(pass, 10),
        photo,
        instagram,
        phone,
        info,
        telegram,
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
        type: 'owner',
      };

      return res.json({ id: newUser.id, name: newUser.name, type: 'owner' });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(418);
};

const signIn = async (req, res) => {
  const { pass, mail, typeUser } = req.body;

  // signIn artist
  if (pass && mail && typeUser === 'authartist') {
    try {
      const currentUser = await Artist.findOne({ where: { mail } });
      if (currentUser && (await bcrypt.compare(pass, currentUser.pass))) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
          type: 'artist',
        };

        return res.json({ id: currentUser.id, name: currentUser.name, type: 'artist' });
      }
      return res.sendStatus(401);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  // signIn owner
  if (pass && mail && typeUser === 'authowner') {
    try {
      const currentUser = await Owner.findOne({ where: { mail } });
      if (currentUser && (await bcrypt.compare(pass, currentUser.pass))) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
          type: 'owner',
        };

        return res.json({ id: currentUser.id, name: currentUser.name, type: 'owner' });
      }
      return res.sendStatus(401);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signOut = async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    res.clearCookie('user_sid');

    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    if (req.session.user.type === 'artist') {
      const user = await Artist.findByPk(req.session.user.id);
      return res.json({ id: user.id, name: user.name, type: 'artist' });
    }
    if (req.session.user.type === 'owner') {
      const user = await Owner.findByPk(req.session.user.id);
      return res.json({ id: user.id, name: user.name, type: 'owner' });
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
};
