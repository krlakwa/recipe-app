import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../core/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('First recipe', 'Test', 'https://i.ytimg.com/vi/PPLa3yIAoUo/maxresdefault.jpg'),
    new Recipe('Second recipe', 'Test2', 'https://bit.ly/2OZVLT2')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
