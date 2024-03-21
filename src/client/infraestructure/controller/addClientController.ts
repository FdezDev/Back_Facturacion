import { Request, Response } from "express";
import { AddClientUseCase } from "../../application/addClientUsecase";

export class AddClientController{
    constructor(readonly addClientUseCase: AddClientUseCase){}

    async run (req: Request, res: Response){
        try {
            let {name, last_name,phone,address,service,item,price,date_int,date_end,total_payment,status_payment} = req.body;

            let createdClient = await this.addClientUseCase.run(name, last_name,phone,address,service,item,price,date_int,date_end,total_payment,status_payment);

            if (createdClient) {
                return res.status(201).send({
                    status: "success",
                    data:{
                        name: createdClient.name,
                        last_name: createdClient.last_name,
                        phone: createdClient.phone,
                        address: createdClient.address,
                        service: createdClient.service,
                        item: createdClient.item,
                        price: createdClient.price,
                        date_int: createdClient.date_int,
                        date_end: createdClient.date_end,
                        total_payment: createdClient.total_payment,
                        status_payment: createdClient.status_payment
                    },
                    message:"Cliente Creado Exitoso"
                });
                
            }
            res.status(400).send({
                status: "error",
                data: [],
                validations: [], // TODO: implementar validaciones
                message: "Error al crear Cliente nuevo, intentalo mas tarde"
            });
        } catch (error) {
            console.error("Error in AddClientController:", error);
            res.status(500).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}