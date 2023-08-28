import { Sequelize } from 'sequelize'

const dataBaseConnection = new Sequelize(
    'notebook',
    'root',
    '',
    {host:'localhost', dialect:'mysql'}
)

export default dataBaseConnection