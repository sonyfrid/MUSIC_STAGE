require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const listArtist = require('./routers/listArtist');
const authRouter = require('./routers/auth.router');
const tracks = require('./routers/tracks.router');
const upload = require('./routers/upload');
const types = require('./routers/type.router');
const search = require('./routers/search.router');
const genres = require('./routers/genre.router');
// const upload = require('./routers/upload');
const allPlaces = require('./routers/allPlaces.router');
const eventStatus = require('./routers/eventStatus.router');
const addEvent = require('./routers/addEvent.router');

const app = express();
const PORT = 3030 || 3001;

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'blabla', // Секретное слово для шифрования, может быть любым
  store: new FileStore(),
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.user = req.session?.user;
  next();
});

app.use('/auth', authRouter);
app.use('/listArtist', listArtist);
app.use('/tracks', tracks);
app.use('/types', types);
app.use('/genres', genres);
app.use('/search', search);
app.use('/upload', upload);
app.use('/allPlaces', allPlaces);
app.use('/eventStatus', eventStatus);
app.use('/addEvent', addEvent);

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
