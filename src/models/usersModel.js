module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';

    let cols = {
        id: {
            type: dataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            //allowNull: false,
        },
        username: {
            type: dataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        email: {
            type: dataTypes.STRING(254),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        roleId: {
            type: dataTypes.TINYINT(),
            allowNull: false,
            defaultValue: 0
        },
        image: {
            type: dataTypes.STRING(255),
            allowNull: true
        },
        createdAt: {
            type: dataTypes.DATE,
            //allowNull: false,
            defaultValue: Date.now()
        },
        updatedAt: {
            type: dataTypes.DATE,
            //allowNull: false,
            defaultValue: Date.now()
        }
    };

    let config = {
        tableName: 'users',
        timestamps: true,
        underscored: false,
    };

    const Users = sequelize.define(alias, cols, config);

    Users.associate = function (models) {
        Users.belongsTo(models.Roles, {
            as: 'role',
            targetKey: 'id',
            foreignKey: 'roleId'
        });
    };

    sequelize.sync();
    return Users;
}
