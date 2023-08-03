import {DataTypes} from 'sequelize'
import Connection from '../database/connection.js'
import Category from './Category.js'


const Note = Connection.define( 'notes',
    {
        title : DataTypes.STRING,
        content : DataTypes.TEXT,
        example : DataTypes.TEXT,
        link : DataTypes.TEXT,
        visitedAt: DataTypes.DATE,
        category_id: DataTypes.INTEGER,
    }
)

Note.belongsTo(Category, {foreignKey: 'category_id'})

export default Note