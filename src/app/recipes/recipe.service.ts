import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
   
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'A test recipe',
    //         'This is simply a test', 
    //         'https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200-600x400.jpg',
    //         [
    //             new Ingredient('Pepporoni', 8),
    //             new Ingredient('Mozzarella', 10)
    //         ]),
    //     new Recipe(
    //         'Another test recipe', 
    //         'This is simply a test', 
    //         'https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200-600x400.jpg',
    //         [
    //             new Ingredient('Sausage', 8),
    //             new Ingredient('Cheddar', 10)
    //         ]) 
    //   ];

    private recipes: Recipe[] = [];

      constructor(
        private store: Store<fromApp.AppState>
        ) {}

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        // this.slService.addIngredients(ingredients);
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
}