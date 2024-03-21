import { Request, Response } from 'express';
import { AuthUseCase } from '../../application/authUseCase';

export class AuthController {
    constructor(private authUseCase: AuthUseCase) {}

    async run(req: Request, res: Response) {
        const { email, password } = req.body;
        const result = await this.authUseCase.run(email, password);
        
        // Basado en el estado, responde con el código de estado adecuado
        if (result.status === 'success' && result.token) {
            res.status(200).send({ status: 'success', token: result.token });
        } else {
            res.status(401).send(result);
        }
    }
}