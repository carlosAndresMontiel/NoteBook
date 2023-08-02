import Note from './Note.js'
import {DataTypes} from 'sequelize'
import Connection from '../database/connection.js'


const Category = Connection.define( 'categories',
    {
        name : DataTypes.STRING,
    })
Category.hasMany(Note,{
    foreignKey: 'category_id'
})

export default Category 