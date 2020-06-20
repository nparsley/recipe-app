import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200-600x400.jpg') 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
