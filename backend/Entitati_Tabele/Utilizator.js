import sequelize from '.././Baza_date.js';
import Sequelize  from "sequelize";

class Utilizator extends Sequelize.Model { }
Utilizator.init({
    Email: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull : false
    },

    Parola: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modeName:'utilizatori'
}) 

export default Utilizator;