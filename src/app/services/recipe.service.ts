import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model'
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()


  constructor() { }

 private recipes: Recipe[] = [
   new Recipe(
     'Chinese Chicken',
     'Chinese Chicken with sweet and sour sauce',
     'https://s-media-cache-ak0.pinimg.com/originals/63/6d/8d/636d8d6cfbf1862e5ad5f89571c55430.jpg',
     [new Ingredient('Chicken Portions', 4), new Ingredient('Chinese spices', 1)]
   ),
   new Recipe(
     'Sausage Casserole',
     'Sausage Casserole with onion gravy',
     'http://d3udvtnhu4gqbm.cloudfront.net/wp-content/uploads/Italian-Sausage.jpg',
     [new Ingredient('Sausages', 6), new Ingredient('onions', 2)]
   )
 ];


//gets recipes and returns them
 getRecipes() {
   return this.recipes.slice()
 }

 removeRecipe(id: number) {

   this.recipes.splice(id, 1);
   this.recipesChanged.next(this.recipes.slice());

 }

 //finds a recipe by id
 getRecipe(index: number) {
   return this.recipes[index]

 }


 // adds a new recipe
 addRecipe(recipe: Recipe) {
   this.recipes.push(recipe)
   this.recipesChanged.next(this.recipes.slice());
 }


 // updates existing altered recipe
 // observable emits when changed and emits new slice
 upDateRecipe(id: number, newRecipe: Recipe) {
   this.recipes[id] = newRecipe;
   this.recipesChanged.next(this.recipes.slice());
 }


}


