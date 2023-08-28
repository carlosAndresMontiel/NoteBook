
import {DataTypes} from 'sequelize'
import dataBaseConnection from '../database/connection.js'


const CategoryModel = dataBaseConnection.define( 'categories',
    {
        name : DataTypes.STRING,
    })

export default CategoryModel