import { cliente } from "../domain/client";
import { ClientRepository } from "../domain/clientRepository";

export class AddClientUseCase{
    constructor(readonly clientRepository: ClientRepository){}
    async run (name: string, last_name: string, phone:number, address: string, service: string, item:number, price: number, date_int: string, date_end: string, total_payment: number, status_payment: string): Promise<cliente | null>{
        try {
            const createdClient = await this.clientRepository.addClient(name, last_name, phone, address, service, item, price, date_int, date_end, total_payment,status_payment);
            return createdClient;
        } catch (error) {
            console.error("Error In AddClientUseCase", error);
            return null;
            
        }
    }
}