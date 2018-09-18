import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../core/models/recipe.model';
import { RecipeService } from '../../core/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientstoShoppingList(this.recipe.ingredients);
  }
}
