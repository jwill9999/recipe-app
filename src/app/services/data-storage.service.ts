import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

  recipesUrl: string = 'https://recipe-book-c81b8.firebaseio.com/recipes.json'

  constructor(public http: Http, public recipeService: RecipeService) {
    this.getRecipes();
  }

  storeRecipes() {
    return this.http.put(this.recipesUrl, this.recipeService.getRecipes());
  }


  getRecipes() {
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
      )
      .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes)
      }
      );
  }

}


