import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    /*
        private -> Para ter acesso ao this. , para a variavel esta disponivel para toda a classe.
    */

    constructor(private specificationRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationExists =
            this.specificationRepository.findByName(name);

        if (specificationExists) {
            throw new Error("Specification already exists");
        }

        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
