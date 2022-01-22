import Sequelize from 'sequelize';
import sequelize from '../Baza_date.js';

class Bug extends Sequelize.Model{}

Bug.init({
    Bug_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    Detalii:{
        type: Sequelize.STRING
    },
    Echipa:{
        type:Sequelize.STRING
    },
    Prioritate:{
        type:Sequelize.INTEGER
    },
    DataBug:{
        type:Sequelize.DATE
    },
    Rezolvat:{
        type:Sequelize.BOOLEAN
    }

},{
    sequelize,
    modelName: 'bug'
});

export default Bug;
// module.exports= Bug;