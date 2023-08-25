
import {DataTypes} from 'sequelize'
import Connection from '../database/connection.js'


const Category = Connection.define( 'categories',
    {
        name : DataTypes.STRING,
    })

export default Category 