import {DataTypes} from 'sequelize'
import dataBaseConnection from '../database/connection.js'
import CategoryModel from './CategoryModel.js'


const NoteModel = dataBaseConnection.define( 'notes',
    {
        title : DataTypes.STRING,
        content : DataTypes.TEXT,
        example : DataTypes.TEXT,
        link : DataTypes.TEXT,
        visitedAt: DataTypes.DATE,
        category_id: DataTypes.INTEGER,
    }
)

NoteModel.belongsTo(CategoryModel, {foreignKey: 'category_id'})

export default NoteModel