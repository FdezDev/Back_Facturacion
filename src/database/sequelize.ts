// sequelize.ts

import { Sequelize } from 'sequelize-typescript';
import UserModel from '../users/infraestructure/models/userModel';
import ClientModel from '../client/infraestructure/models/clientModels';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'roundhouse.proxy.rlwy.net',
    port: 31696,
    database: 'railway',
    username: 'postgres',
    password: '-BD*AcA6beGEe1F6d651aCbE*3FgB1gg',
    models: [UserModel, ClientModel],
});

export async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
        await sequelize.sync({ force: false });
    } catch (err) {
        console.error('No se pudo conectar a la base de datos:', err);
        process.exit(1);  // Cierra la aplicación si hay un error de conexión
    }
}






