// const {Sequelize}=require('sequelize');
import Sequelize  from "sequelize";
const sequelize= new Sequelize('proiect_bugs.bd','user','pass',{
    dialect:'sqlite',
    define:{
        freezeTableName: true
    },
    host:":memory:"
});

export default sequelize;
