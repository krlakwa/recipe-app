import { Recipe } from '../models/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('First recipe', 'Test', 'https://i.ytimg.com/vi/PPLa3yIAoUo/maxresdefault.jpg'),
    new Recipe('Second recipe', 'Test2', 'https://bit.ly/2OZVLT2')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
