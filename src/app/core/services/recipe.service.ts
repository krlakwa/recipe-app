import { Recipe } from '../models/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { wrapListenerWithDirtyAndDefault } from '@angular/core/src/render3/instructions';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Bean and Tomato Stew with Sage',
      'White beans and tomatoes combine with the light flavors of white wine, sage, and thyme in a stew with a chili-like consistency.',
      'https://images.media-allrecipes.com/userphotos/560x315/2797.jpg',
      [
        new Ingredient('Diced tomatoes in juice', 2),
        new Ingredient('White wine', 0.25, 'cup'),
        new Ingredient('Water', 2, 'tbs.'),
        new Ingredient('Cannellini beans', 1, 'can')
      ]),
    new Recipe(
      'Vegan Tomato Soup',
      'I do not peel the tomatoes because there are lots of vitamins and fiber in the skin.',
      'https://images.media-allrecipes.com/userphotos/560x315/5261486.jpg',
      [])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
