const route = require('express-promise-router')();
const UserController = require('../app/Controllers/UserController');
const CardController = require('../app/Controllers/CardController');
const Card = require('../app/Models/Card');
const auth = require('../app/Middlewares/auth');
const changeLog = require('../app/Middlewares/changeLog');

// authenticate
route.post('/login', UserController.authenticate);

//cards
route.get('/cards', auth, CardController.getCards);
route.post('/cards', auth, CardController.createCard);
route.put('/cards/:id', auth, CardController.updateCard, changeLog);
route.delete('/cards/:id', auth, CardController.deleteCard, changeLog);

module.exports = route;
