import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200-600x400.jpg'),
        new Recipe('Another test recipe', 'This is simply a test', 'https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200-600x400.jpg') 
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}