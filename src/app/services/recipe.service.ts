import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

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

 getRecipes(){
   return this.recipes.slice()
 }

   getRecipe(index: number)
{
  return this.recipes[index]
}

}
