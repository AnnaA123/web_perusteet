'use strict';
require('dotenv').config();
const express = require('express');
const db = require('./modules/database');
const resize = require('./modules/resize');
// const exif = require('./modules/exif');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const bodyParser = require('body-parser');

const multer = require('multer');
const upload = multer({dest: 'public/uploads/'});

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());

const connection = db.connect();

const cb = (result, res) => {
  console.log(result);
  res.send(result);
};

app.use(express.static('public'));

// login with passport
passport.serializeUser((user, done) => {
  console.log('serialize:', user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// function to check if the user has logged in, to be used in middleware
const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.send('{"error": "Not logged in!"}');
  }
};

app.use(session({
  secret: 'keyboard LOL cat',
  resave: true,
  saveUninitialized: true,
  cookie: {secure: false},
}));

passport.use(new LocalStrategy(
    (username, password, done, err) => {
      console.log('Here we go: ' + username);
      // let res = null;

      const doLogin = (username, password) => {
        return new Promise((resolve, reject) => {
          db.login([username, password], connection, (result) => {
            // res == true
            if (result) {
              resolve(result);
            } else {
              reject(err);
            }
          });
        });
      };

      return doLogin(username, password).then((result) => {
        if (result.length < 1) {
          console.log('undone');
          return done(null, false);
        } else {
          console.log('done');
          result[0].password = ''; // remove password from user's data
          return done(null, result[0]); // result[0] is user's data, accessible as req.user
        }
      }).catch(() => {
        return done(null, false);
      });
    },
));

app.use(passport.initialize());
app.use(passport.session());

// authentication with custom callback (http://www.passportjs.org/docs/authenticate/)
app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) { // if login not happening
      return res.redirect('/node/signup.html');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/node/main.html'); // if login succesful
    });
  })(req, res, next);
});

app.use('/register', (req, res, next) => {
  console.log(req.body);
  db.register([req.body.username, req.body.suemail, req.body.password],
      connection, () => {
        next();
      });

});

app.post('/register', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) { // if login not happening
      return res.redirect('/node/signup.html');
    }
    req.logIn(user, function(err) {
      // send userID as cookie:
      res.cookie('userID', req.user.ID);
      if (err) {
        return next(err);
      }
      return res.redirect('/node/main.html'); // if login succesful
    });
  })(req, res, next);
});

app.use(express.static('public'));

app.post('/upload', upload.single('kuva'), (req, res, next) => {
  /* const response = {
     url: 'kuvat/' + req.file.filename,
     mimeType: req.file.mimeType,
   };
   res.send(response);*/
  next();
});

let date = new Date();
let timestamp = date.getDate() + '-' + date.getMonth() + '-' +
    date.getFullYear();

// insert to database
app.use('/upload', (req, res, next) => {
  console.log('user id', req.user.ID);

  const data = [
    'uploads/' + req.file.filename,
    req.body.description,
    timestamp,
    req.user.ID,
  ];
  db.insert(data, connection, () => {
    const response = {
      url: 'kuvat/' + req.file.filename,
      mimeType: req.file.mimeType,
    };
    res.redirect('./main.html');
  });
});

// get all images
app.get('/images', (req, res) => {
  db.select(connection, cb, res);
});

// get users images
app.get('/images/:id', (req, res) => {
  db.selectByUser(connection, [req.params.id], cb, res);
});

/*
// get users images
app.get('/images/:username', (req, res) => {
  db.selectByName(connection, [req.params.username], cb, res);
});
*/

// get search images
app.get('/haku/:sana', (req, res) => {
  db.search(connection, '%' + [req.params.sana] + '%', cb, res);
});

// get user
app.get('/user', (req, res) => {
  console.log('uuseri', req.user);
  res.send(req.user);
});

app.post('/profilepic', upload.single('kuva'), (req, res, next) => {
  /* const response = {
     url: 'kuvat/' + req.file.filename,
     mimeType: req.file.mimeType,
   };
   res.send(response);*/
  next();
});

//update picture
app.use('/profilepic', loggedIn, (req, res) => {
  console.log('body', req.body);
  const data = [
    req.body.userimg,
    req.user.ID,
  ];
  db.changePic(data, connection);

  console.log('update');
  res.send('{"status": "update OK"}');
  res.redirect('./profile.html');
});

/*
const sendForm = (evt) => {
  evt.preventDefault();
  const fd = new FormData(frm);
  const settings = {
    method: 'post',
    body: fd,
  };

  fetch('./upload', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    // update list
    getData();
  });
};

*/
/*app.use('/userDescription', function(req, res, next) {
  console.log(req.body);
  db.userDescription([req.body.uus], connection, () => {
    next();
  });
});*/

/*
// respond to post and save file
app.post('/upload', upload.single('mediafile'), (req, res, next) => {
  next();
});

// create thumbnail
app.use('/upload', (req, res, next) => {
  resize.doResize(req.file.path, 300,
      './public/thumbs/' + req.file.filename + '_thumb', next);
});

// create medium image
app.use('/upload', (req, res, next) => {
  resize.doResize(req.file.path, 640,
      './public/medium/' + req.file.filename + '_medium', next);
});

// get coordinates
/*app.use('/upload', (req, res, next) => {
  exif.getCoordinates(req.file.path).then(coords => {
    req.coordinates = coords;
    next();
  }).catch(() => {
    console.log('No coordinates');
    req.coordinates = {};
    next();
  });
});*/

// insert to database
/*
app.use('/upload', (req, res, next) => {
  console.log('insert is here');
  const data = [
    req.body.category,
    req.body.title,
    req.body.details,
    req.file.filename + '_thumb',
    req.file.filename + '_medium',
    req.file.filename,
    //req.coordinates,
  ];
  db.insert(data, connection, next);
});

// get updated data form database and send to client
app.use('/upload', (req, res) => {
  db.select(connection, cb, res);
});

app.get('/images', (req, res) => {
  db.select(connection, cb, res);
});

app.patch('/images', (req, res) => {
  console.log('body', req.body);
  const update = db.update(req.body, connection);
  console.log('update', update);
  res.send('{"status": "update OK"}');
});

app.delete('/images/:mID', (req, res) => {
  const mID = [req.params.mID];
  db.del(mID, connection);
  res.send('{"status": "delete OK"}');
});

*/

app.listen(8000);

