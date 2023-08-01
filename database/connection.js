import { Sequelize } from 'sequelize'

const Connection = new Sequelize(
    'notebook',
    'root',
    '',
    {host:'localhost', dialect:'mysql'}
)

export default Connection