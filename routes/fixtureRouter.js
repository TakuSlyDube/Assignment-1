const express = require('express');
const router = express.Router();
const {
    createFixture,
getAllFixtures,
getFixtureByCode,
deleteFixture
} = require('../controller/fixtureController');

router.post('/fixtures', createFixture);
router.get('/fixtures', getAllFixtures);
router.get('/fixtures/:fixture_code', getFixtureByCode);
router.delete('/fixtures/:fixture_code', deleteFixture);

module.exports = router;