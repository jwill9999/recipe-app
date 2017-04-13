
import { Ingredient } from './../../shared/ingredient.model';

import { ShoppinglistService } from './../../services/shoppinglist.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent  {
  ingredients;
constructor(public shoppingListService: ShoppinglistService){

}
name;
@Input() recipe: Recipe;


addToShoppingList() {
  for (let i of this.recipe.ingredients) {
    this.shoppingListService.addIngredients(i)
  }
}
}


