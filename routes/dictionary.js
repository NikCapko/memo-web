var express = require('express');
var router = express.Router();
const jsonParser = express.json();

module.exports = router;

/**
 * GET dictionary list.
 **/
router.get('/', jsonParser, function (request, response) {
    resp = [
        {
            id: 1,
            name: 'Словарь 1',
            size: 10,
        }
    ]
    response.setHeader("Content-Type", "application/json")
    response.status(200).send(JSON.stringify(resp));
});

/**
 * GET words from dictionary.
 **/
router.get('/:id', jsonParser, function (request, response) {
    resp = [
        {
            id: 1,
            word: 'apple',
            type: 'noun',
            gender: 'n',
            translation: 'яблоко',
            frequency: 0,
            forms: [],
            primaryLanguage: true
        },
        {
            id: 2,
            word: 'яблоко',
            type: 'noun',
            gender: 'n',
            translation: 'apple',
            frequency: 0,
            forms: [],
            primaryLanguage: false
        },
        {
            id: 3,
            word: 'sweet',
            type: 'adj',
            gender: null,
            translation: 'сладкий',
            frequency: 0,
            forms: [],
            primaryLanguage: true
        },
        {
            id: 4,
            word: 'сладкий',
            type: 'adj',
            gender: null,
            translation: 'sweet',
            frequency: 0,
            forms: [
                {
                    key: 'm_gender',
                    name: 'Мужской род',
                    value: 'сладкий',
                },
                {
                    key: 'f_gender',
                    name: 'Женский род',
                    value: 'сладкая',
                },
                {
                    key: 'n_gender',
                    name: 'Средний род',
                    value: 'сладкое',
                }
            ],
            primaryLanguage: false
        },
        {
            id: 5,
            word: 'cherry',
            type: 'noun',
            gender: 'n',
            translation: 'вишня',
            frequency: 0,
            forms: [],
            primaryLanguage: true
        },
        {
            id: 6,
            word: 'вишня',
            type: 'noun',
            gender: 'f',
            translation: 'cherry',
            frequency: 0,
            forms: [],
            primaryLanguage: false
        },
        {
            id: 7,
            word: 'jump',
            type: 'verb',
            gender: null,
            translation: 'прыгать',
            frequency: 0,
            forms: [],
            primaryLanguage: true
        },
        {
            id: 8,
            word: 'прыгать',
            type: 'verb',
            gender: null,
            translation: 'jump',
            frequency: 0,
            forms: [
                {
                    key: 'person1singular',
                    name: '1-е л. е.ч. (я)',
                    value: 'прыгаю',
                },
                {
                    key: 'person1plural',
                    name: '1-е л. мн.ч. (мы)',
                    value: 'прыгаем',
                },
                {
                    key: 'person2singular',
                    name: '2-е л. е.ч. (ты)',
                    value: 'прыгаешь',
                },
                {
                    key: 'person2plural',
                    name: '2-е л. мн.ч. (Вы)',
                    value: 'прыгаете',
                },
                {
                    key: 'person2plural',
                    name: '3-е л. ед.ч. (он, она, оно)',
                    value: 'прыгает',
                },
                {
                    key: 'person3singular',
                    name: '3-е л. ед.ч. (он, она, оно)',
                    value: 'прыгает',
                },
                {
                    key: 'person3plural',
                    name: '3-е л. мн.ч. (они)',
                    value: 'прыгают',
                }
            ],
            primaryLanguage: false
        },
        {
            id: 9,
            word: 'yellow',
            type: 'adj',
            gender: null,
            translation: 'желтый',
            frequency: 0,
            forms: [],
            primaryLanguage: true
        },
        {
            id: 10,
            word: 'желтый',
            type: 'adj',
            gender: null,
            translation: 'yellow',
            frequency: 0,
            forms: [
                {
                    key: 'm_gender',
                    name: 'Мужской род',
                    value: 'желтый',
                },
                {
                    key: 'f_gender',
                    name: 'Женский род',
                    value: 'желтая',
                },
                {
                    key: 'n_gender',
                    name: 'Средний род',
                    value: 'желтое',
                }
            ],
            primaryLanguage: false
        },
        {
            id: 11,
            word: 'lemon',
            type: 'noun',
            gender: 'n',
            translation: 'лимон',
            frequency: 0,
            forms: [],
            primaryLanguage: true
        },
        {
            id: 12,
            word: 'лимон',
            type: 'noun',
            gender: 'm',
            translation: 'lemon',
            frequency: 0,
            forms: [],
            primaryLanguage: false
        },
        {
            id: 13,
            word: 'potato',
            type: 'noun',
            gender: 'n',
            translation: 'картофель',
            frequency: 0,
            forms: [],
            primaryLanguage: true
        },
        {
            id: 14,
            word: 'картофель',
            type: 'noun',
            gender: 'm',
            translation: 'potato',
            frequency: 0,
            forms: [],
            primaryLanguage: false
        },
        {
            id: 15,
            word: 'cucumber',
            type: 'noun',
            gender: 'n',
            translation: 'огурец',
            frequency: 0,
            forms: [],
            primaryLanguage: true
        },
        {
            id: 16,
            word: 'огурец',
            type: 'noun',
            gender: 'm',
            translation: 'cucumber',
            frequency: 0,
            forms: [],
            primaryLanguage: false
        },
        {
            id: 17,
            word: 'big',
            type: 'adj',
            gender: null,
            translation: 'большой',
            frequency: 0,
            forms: [],
            primaryLanguage: true
        },
        {
            id: 18,
            word: 'большой',
            type: 'adj',
            gender: null,
            translation: 'big',
            frequency: 0,
            forms: [
                {
                    key: 'm_gender',
                    name: 'Мужской род',
                    value: 'большой',
                },
                {
                    key: 'f_gender',
                    name: 'Женский род',
                    value: 'большая',
                },
                {
                    key: 'n_gender',
                    name: 'Средний род',
                    value: 'большое',
                }
            ],
            primaryLanguage: false
        },
        {
            id: 19,
            word: 'green',
            type: 'adj',
            gender: null,
            translation: 'зеленый',
            frequency: 0,
            forms: [],
            primaryLanguage: true
        },
        {
            id: 20,
            word: 'зеленый',
            type: 'adj',
            gender: null,
            translation: 'green',
            frequency: 0,
            forms: [
                {
                    key: 'm_gender',
                    name: 'Мужской род',
                    value: 'зеленый',
                },
                {
                    key: 'f_gender',
                    name: 'Женский род',
                    value: 'зеленая',
                },
                {
                    key: 'n_gender',
                    name: 'Средний род',
                    value: 'зеленое',
                }
            ],
            primaryLanguage: false
        }
    ]
    response.setHeader("Content-Type", "application/json")
    response.status(200).send(JSON.stringify(resp));
});
