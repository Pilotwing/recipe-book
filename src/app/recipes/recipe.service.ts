import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('a test', 'This is a simply a test', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/08/peanut-butter-cookies-7-600x900.jpg', []),
        new Recipe('Peanut Butter Cookie', 'cookies with peanut butter', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/08/peanut-butter-cookies-7-600x900.jpg',
        [
            new Ingredient('peanut butter', 5),
            new Ingredient('sugar', 4)
        ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppintList(ingredient: Ingredient[]) {
        this.slService.addIngredients(ingredient);
    }
}