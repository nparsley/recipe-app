import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
   
    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe',
            'This is simply a test', 
            'https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200-600x400.jpg',
            [
                new Ingredient('Pepporoni', 8),
                new Ingredient('Mozzarella', 10)
            ]),
        new Recipe(
            'Another test recipe', 
            'This is simply a test', 
            'https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200-600x400.jpg',
            [
                new Ingredient('Sausage', 8),
                new Ingredient('Cheddar', 10)
            ]) 
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}