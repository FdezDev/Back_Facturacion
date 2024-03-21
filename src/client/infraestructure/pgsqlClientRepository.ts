import { cliente } from "../domain/client";
import { ClientRepository } from "../domain/clientRepository";
import ClientModel from "./models/clientModels";

export class PgsqlClientRepository implements ClientRepository{
    async addClient(name: string, last_name: string, phone: number, address: string, service: string, item: number, price: number, date_int: string, date_end: string, total_payment: number, status_payment: string): Promise<cliente | null> {
        try {
            const createdClient = await ClientModel.create({name, last_name,phone,address,service,item,price,date_int,date_end,total_payment,status_payment});
            return new cliente(createdClient.id,createdClient.name,createdClient.last_name,createdClient.phone,createdClient.address,createdClient.service,createdClient.item,createdClient.price,createdClient.date_int,createdClient.date_end,createdClient.total_payment,createdClient.status_payment);
        } catch (error) {
            console.error("Error in PgsqlClient", error);
            return null;
        }
    }

}