module.exports = (sequelize, dataTypes) => {

    let alias = 'Plantas';

    let cols = {

        id:{
            type: dataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: dataTypes.STRING(255),
            allowNull: false,
            //unique: true
        },
        grupo:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion:{
            type: dataTypes.STRING(2500),
            allowNull: false,
            //defaultValue: 0
        },
        temporada:{
            type: dataTypes.STRING(255),
            allowNull: false,
            //defaultValue: 0
        },
        ambiente:{
            type: dataTypes.STRING(100),
            allowNull: false,
            //defaultValue: 0
        }
    };

    let config = {
        tableName: 'plantas',
        timestamps: false,
        underscore: false
    };

    const Plantas = sequelize.define(alias, cols, config);

    return Plantas;
}