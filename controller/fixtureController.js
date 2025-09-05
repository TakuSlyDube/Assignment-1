const {Fixture} = require('../models');

const createFixture = async (req, res) => {
  try {
    const fixture = await Fixture.create(req.body);
    res.status(201).json(fixture);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllFixtures = async (req, res) => {
  try {
    const fixtures = await Fixture.findAll();
    res.status(200).json(fixtures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFixtureByCode = async (req, res) => {
  try {
    const fixture = await Fixture.findOne({ where: { fixture_code: req.params.fixture_code } });
    if (fixture) {
      res.status(200).json(fixture);
    } else {
      res.status(404).json({ error: 'Fixture not found' });
    }       
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

const updateFixture = async (req, res) => {
  try {
    const fixture = await Fixture.findOne({ where: { fixture_code: req.params.fixture_code } });    
    if (fixture) {
        await fixture.update(req.body);
        res.status(200).json(fixture);
    }
    else {
        res.status(404).json({ error: 'Fixture not found' });
    }   

    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

const deleteFixture = async (req, res) => {
  try {
    const fixture = await Fixture.destroy({ where: { fixture_code: req.params.fixture_code } });
    if (fixture) {
      res.status(200).json({ message: 'Fixture deleted successfully' });
    } else {
        res.status(404).json({ error: 'Fixture not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
createFixture,
getAllFixtures,
getFixtureByCode,
deleteFixture
};