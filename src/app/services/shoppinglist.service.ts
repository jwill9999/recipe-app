import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppinglistService {
  amountInput: any;
  nameInput: any;
  startedEditing = new Subject<number>();


  public ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Pears', 10)
  ];


  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  editIngredient(index: number, item: Ingredient) {
    this.ingredients[index] = item;
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1)
  }

}
