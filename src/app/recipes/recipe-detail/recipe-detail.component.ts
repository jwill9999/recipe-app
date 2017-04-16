import { Params, ActivatedRoute } from '@angular/router';

import { RecipeService } from './../../services/recipe.service';

import { Ingredient } from './../../shared/ingredient.model';

import { ShoppinglistService } from './../../services/shoppinglist.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent  {

  recipe: Recipe;
  id: number;


  constructor(public shoppingListService: ShoppinglistService, private route: ActivatedRoute, private individualRecipe: RecipeService) { }

  ngOnInit() {
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.individualRecipe.getRecipe(this.id)
    })
  }
  addToShoppingList() {
      this.recipe.ingredients.forEach(ingredient => {
        this.shoppingListService.addIngredients(ingredient)
      })
  }

}




