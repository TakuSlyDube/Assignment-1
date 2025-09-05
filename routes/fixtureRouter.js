const express = require('express');
const router = express.Router();
const {
    createFixture,
getAllFixtures,
getFixtureByCode,
deleteFixture
} = require('../controller/fixtureController');

router.post('/fixtures', createFixture);