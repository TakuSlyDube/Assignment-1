module.exports = (sequelize, DataTypes) => {
  const Fixture = sequelize.define('Fixture', {
    fixture_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fixture_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: 'Unique code for identifying the fixture',
    },
    home_team: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Name of the home team',
    },
    away_team: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Name of the away team',
    },
    fixture_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: 'Day of the fixture',
    },
    fixture_time: {
      type: DataTypes.TIME,
      allowNull: false,
      comment: 'Time of the fixture',
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Location or stadium of the match',
    },
    league: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'Competition or league name',
    },
    status: {
      type: DataTypes.ENUM('scheduled', 'ongoing', 'finished', 'cancelled'),
      allowNull: false,
      defaultValue: 'scheduled',
      comment: 'Status of the fixture',
    }
  }, {
    tableName: 'Fixtures',
    timestamps: true,
  });

  return Fixture;
};
