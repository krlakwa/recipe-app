import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../core/models/ingredient.model';
import { ShoppingListService } from '../../core/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('unitInput') unitInputRef: ElementRef;
  
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingUnit = this.unitInputRef.nativeElement.value;
    
     if (ingName) {
      const newIngredient = new Ingredient(ingName, ingAmount, ingUnit);
      this.slService.addIngredient(newIngredient);
    }
    return;
  }
}
