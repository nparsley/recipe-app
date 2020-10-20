import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
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

      getRecipes() {
          return this.recipes.slice();
      }
}