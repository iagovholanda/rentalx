import { Category } from "../../model/Category";
import {
    ICategoriesRepository,
    ICreateCategoriesDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        /* 
            Inicializando categories. Para chamar atributos dentro da classe, tambem utiliza-se o this.   
        */
        this.categories = [];
    }

    /* 
        Responsavel por criar uma instancia ou repassar uma instancia ja existente.
    */
    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoriesDTO): void {
        /* Instacia a classe, chamando o metodo construtor que vai gerar um id. */
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    /* : tipo_retorno -> Retorno da funcao. */
    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(
            (categorie) => categorie.name === name
        );
        return category;
    }
}

export { CategoriesRepository };
