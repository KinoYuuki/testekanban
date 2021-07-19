const database = require('../../database');
const Card = require('../Models/Card');
const moment = require('moment');

exports.getCards = async (req, res) => {
    try {
        const cardList = await Card.findAll();
        return res.status(200).json(cardList);
    } catch (err) {
        return res.status(400).send({ message: 'Cannot obtain card list' });
    }
}

exports.createCard = async(req, res) => {
    try {
        const { titulo, conteudo, lista } = req.body;

        if (!titulo || !conteudo || !lista) {
            return res.status(400).send({ message: 'Insufficient card information' });
        }
        const newCard = await Card.create({
            titulo,
            conteudo,
            lista
        });

        return res.status(201).send({ message: 'Card creation succeed' });
    } catch (err) {
        return res.status(400).send({ message: 'Card creation failed' });
    }
};

exports.updateCard = async(req, res, next) => {
    try {
        const id = req.params.id;
        const { titulo, conteudo, lista } = req.body;

        const card = await Card.findOne({
            where: {
                id
            }
        });

        if (!card) {
            return res.status(404).send({ message: 'Card doesnt exist' });
        }

        if (!titulo || !conteudo || !lista) {
            return res.status(400).send({ messsage: 'Insufficient card information to update' });
        }

        const cardUpdated = await Card.update({
            titulo,
            conteudo,
            lista
        }, {
            where: {
                id
            }
        })

        res.status(200).send({ message: 'Card updated' });
        return next();
    } catch (err) {
        console.log(err);
        return res.status(400).send({ message: 'Cannot update card' });
    }
}

exports.deleteCard = async (req, res, next) => {
    try {
        const id = req.params.id;
        
        const card = await Card.findOne({
            where: {
                id
            }
        });

        if (!card) {
            return res.status(404).send({ message: 'Card not found' });
        }

        
        res.locals.title = card.titulo;
        res.locals.datetime = moment().format('DD/MM/YYYY HH:MM:ss').toString();
        
        await Card.destroy({
            where: {
                id
            }
        });
        
        res.status(200).send({ message: 'Card deletion succeed' });
        return next();
    } catch (err) {
        console.log("Pimbada number uno: " + err);
        return res.status(400).send({ message: 'Cannot delete card' });
    }

}