import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    /*
        Dependencia Inversion - Categoria nao depende mais saber de quem e o repositorio. 
        Quem fica com a responsabilidade de conhecer o repositorio é a propria rota que o estancia.  
    */
    constructor(private categoriesRepository: ICategoriesRepository) {}

    /* this -> Variavel vindo do metodo constructor. */
    execute({ name, description }: IRequest): void {
        const categorieExists = this.categoriesRepository.findByName(name);

        if (categorieExists) {
            throw new Error("Categorie already exists");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
