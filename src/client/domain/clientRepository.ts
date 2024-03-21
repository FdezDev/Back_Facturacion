import { cliente } from "./client";

export interface ClientRepository{
    addClient(name: string, last_name: string, phone:number, address: string, service: string, item:number, price: number, date_int: string, date_end: string, total_payment: number, status_payment: string): Promise<cliente | null>;
}