module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        firstname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        timers:{
            type: DataTypes.JSONB
        }
    })    
    
    return User
}
    

