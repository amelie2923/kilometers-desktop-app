const path = require('path');
const express = require('express');
const expressApp = express();
const http = require('http').Server(expressApp);
const database = require('./config/database');

// Import des models
const Users = require('./models/users');
const Entities = require('./models/entities')
const Cars = require('./models/cars')
const UserCars = require('./models/userCars')
const UserEntities = require('./models/userEntities')
const Sheets = require('./models/sheets')
const Journeys = require('./models/journeys')


// Routes handler
const index = require('./routes/index');
const ObjectJourneys = require('./models/objectJourneys');
// const entité = require('./routes/entities')
// const vehicule = require('./routes/cars')
/* variable initialisation's */
const router = {
  isStarted: false
};

/**
 * Starting web server on port 3000
 *
 * When we start we create tables in database if not exist
 * @param {*} callback
 */
function start(callback) {
  if (router.isStarted === false) {
    init(function () {

      // Handle routes function
      loadRoutes(function () {

        /* Mettre les relation ici */
        // Les voitures appartienent aux entités
        Entities.belongsToMany(Cars, { through: UserCars });
        // Les entités appartienent aux voitures
        Cars.belongsToMany(Entities, { through: UserEntities });
        // Les utilisateurs appartienent aux entités
        Entities.belongsToMany(Users, { through: UserEntities });
        // Les entités appartienent aux utilisateurs
        Users.belongsToMany(Entities, { through: UserEntities });
        // Les Objets de trajet peuvent avoir plusieurs trajets
        ObjectJourneys.hasMany(Journeys);
        //Plusieurs trajets appartiennent à Objet de trajet
        Journeys.belongsTo(ObjectJourneys);

        // Un user a plusieurs trajets
        Users.hasMany(Journeys);
        //Plusieurs trajets appartiennent à un user
        Journeys.belongsTo(Users);

        // Une entité a plusieurs trajets
        Entities.hasMany(Journeys);
        // Plusieurs trajets appartiennent à une entité
        Journeys.belongsTo(Entities);
        // Les Voitures peuvent avoir plusieurs trajets
        Cars.hasMany(Journeys);
        //Plusieurs trajets appartiennent à une voiture
        Journeys.belongsTo(Cars);

        //ajout relation sheets/journeys
        // Les Voitures peuvent avoir plusieurs trajets
        Sheets.hasMany(Journeys);
        //Plusieurs trajets appartiennent à une Sheet
        Journeys.belongsTo(Sheets);

        // database connection and sync
        database
          // .sync({force: true})
          .sync()
          .then(result => {
            // starting web server
            http.listen(3000, function () {
              console.log('Application is running on port 3000');
              router.isStarted = true;
              if (typeof callback != 'undefined') {
                callback();
              }
            });
          })
      });
    });
  } else {
    console.log("Application already started");
    if (typeof callback != 'undefined') {
      callback();
    }
  }
}

/**
 * Initialisation of view engine and others parameters
 * @param {*} callback
 */
function init(callback) {

  /** view engine setup*/
  expressApp.set('views', path.join(__dirname, 'views'));
  expressApp.set('view engine', 'ejs');
  expressApp.use(express.json());
  expressApp.use(express.urlencoded({ extended: false }));
  expressApp.use(express.static(path.join(__dirname, 'assets')));

  /* Keep server down */
  router.isStarted = false;
  if (typeof callback != 'undefined') {
    callback();
  }
}

/**
 * Route's management
 * @param {*} callback
 */
function loadRoutes(callback) {
  expressApp.use("/", index);
  if (typeof callback != 'undefined') {
    callback();
  }
}

module.exports = {
  start: start
};
