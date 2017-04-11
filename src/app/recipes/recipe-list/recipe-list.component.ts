import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

@Output() recipeWasSelected = new EventEmitter<Recipe>();

 recipes: Recipe[] = [
   new Recipe(
     'Chinese Chicken',
     'Chinese Chicken with sweet and sour sauce',
     'https://s-media-cache-ak0.pinimg.com/originals/63/6d/8d/636d8d6cfbf1862e5ad5f89571c55430.jpg'
   ),
   new Recipe(
     'Sausage Casserole',
     'Sausage Casserole with onion gravy',
     'http://d3udvtnhu4gqbm.cloudfront.net/wp-content/uploads/Italian-Sausage.jpg'
   )
 ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
   this.recipeWasSelected.emit(recipe);
  }

}
