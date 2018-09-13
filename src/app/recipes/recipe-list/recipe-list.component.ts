import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../core/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First recipe', 'Test', 'https://i.ytimg.com/vi/PPLa3yIAoUo/maxresdefault.jpg'),
    new Recipe('Second recipe', 'Test2', 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Burger-Lab_Lamb-Burger-LEDE.jpg?itok=V_i57ev6')
  ];

  constructor() { }

  ngOnInit() {
  }

}
