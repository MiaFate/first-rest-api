module.exports = (sequelize, dataTypes) => {
    let alias = 'Roles';

    let cols = {
        id: {
            type: dataTypes.TINYINT(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };

    let config = {
        tableName: 'roles',
        timestamps: false,
        underscored: false
    };

    const Roles = sequelize.define(alias, cols, config);

    

    sequelize.sync();
    return Roles;
}