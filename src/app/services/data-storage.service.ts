import {Recipe} from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { Injectable, OnInit } from '@angular/core';
import {Response, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService implements OnInit {

  recipesUrl: string = 'https://recipe-book-c81b8.firebaseio.com/recipes.json'

  constructor(private http: Http, private recipeService: RecipeService) {
    this.getRecipes();
   }

ngOnInit() {
  //this.getRecipes();

}


  storeRecipes(){
    return this.http.put( this.recipesUrl, this.recipeService.getRecipes());
  }



  getRecipes(){
    this.http.get('https://recipe-book-c81b8.firebaseio.com/recipes.json')
      .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = []
          }
        }
        return recipes;
      }
      ) //map
      .subscribe(
        (recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes)
        }
      );

      }//getrecipe

  }


