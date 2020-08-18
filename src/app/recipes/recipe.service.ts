import {Recipe} from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('a test', 'This is a simply a test', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/08/peanut-butter-cookies-7-600x900.jpg'),
        new Recipe('Peanut Butter Cookie', 'cookies with peanut butter', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/08/peanut-butter-cookies-7-600x900.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}