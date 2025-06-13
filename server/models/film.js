export default (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    film_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    release_year: {
      type: DataTypes.INTEGER, 
      allowNull: true
    },
    language_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    original_language_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true
    },
    rental_duration: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 3
    },
    rental_rate: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
      defaultValue: 4.99
    },
    length: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    replacement_cost: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      defaultValue: 19.99
    },
    rating: {
      type: DataTypes.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17'),
      defaultValue: 'G'
    },
    special_features: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        const raw = this.getDataValue('special_features');
        return raw ? raw.split(',') : [];
      },
      set(value) {
        this.setDataValue('special_features', Array.isArray(value) ? value.join(',') : value);
      }
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'film',
    timestamps: false
  });


  //associations 
  Film.associate = models => {
    Film.belongsTo(models.Language, {
      foreignKey: 'language_id',
      as: 'language'
    });

    Film.belongsTo(models.Language, {
      foreignKey: 'original_language_id',
      as: 'original_language'
    });

  };



  return Film;
};
