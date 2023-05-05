module.exports = (sequelize, DataTypes) => {
    const Timer = sequelize.define('User',{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        minutes:{
            type: DataTypes.STRING,
        },
        seconds:{
            type: DataTypes.STRING,
        },
        startdate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        enddate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        usermail:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })    
    
    return Timer
}
    

