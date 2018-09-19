import { Recipe } from '../models/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
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
      [
        new Ingredient('Cherry tomatoes', 0.25, 'kg'),
        new Ingredient('Vegetablwe broth', 0.25, 'l'),
        new Ingredient('Tomatoes', 2, 'pcs.'),
        new Ingredient('Onion', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientstoShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
