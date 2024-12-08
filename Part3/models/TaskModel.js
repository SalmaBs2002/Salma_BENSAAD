const {DataTypes } = require('sequelize');
const sequelize = require('./db');

const Task = sequelize.define(
  'Task',
  {
    title :{
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      Type:DataTypes.STRING,
    },
    priority:{
      Type:DataTypes.STRING,
    },
    category:{
      Type:DataTypes.STRING,
    },
    dueDate:{
      Type:DataTypes.DATEONLY,
      
    },
    completionStatus:{
      Type:DataTypes.STRING,
      allowNull: false,
    },
  },
  
);

module.exports= taskModel;