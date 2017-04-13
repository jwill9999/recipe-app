import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppinglistService {
    amountInput: any;
    nameInput: any;

  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Pears', 10)
  ];

    addIngredients(ingredient: Ingredient){
      this.ingredients.push(ingredient);
  }

}
