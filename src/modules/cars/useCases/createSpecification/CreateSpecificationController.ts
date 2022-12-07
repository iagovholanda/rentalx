import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    constructor(
        private createSpecificationUseCase: CreateSpecificationUseCase
    ) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        /* Instancia o array do constructor */
        this.createSpecificationUseCase.execute({ name, description });

        return response.status(201).json({ name, description });
    }
}

export { CreateSpecificationController };
