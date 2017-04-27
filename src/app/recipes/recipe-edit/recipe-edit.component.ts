import { Recipe } from './../recipe.model';
import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../../services/recipe.service';
import {Router, ActivatedRoute,  Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeEditForm;
  newForm: boolean = false;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.newForm = params['id'] === undefined;
      this.editMode = params['id'] != null   ;
      this.initForm();
    })
  }

  private initForm() {
    let name = "";
    let imagePath = "";
    let description = "";
    let ingredients = new FormArray([]);

    if (this.editMode) {
      let recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;


      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }

      }


    }

  // Form set up Reactive
    this.recipeEditForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients
    })
  }


   // add new form group to ingredient list
  onAddIngredient() {
    this.editMode = true;
    (<FormArray>this.recipeEditForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }


// adds altered or new recipe to recipe array
  onSubmit() {
    const newRecipe = new Recipe(this.recipeEditForm.value['name'], this.recipeEditForm.value['description'], this.recipeEditForm.value['imagePath'], this.recipeEditForm.value['ingredients'])

    if (!this.newForm) {
      console.log('edit mode still')
      this.recipeService.upDateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
    this.router.navigate(['/recipes', this.id]);
  };


  onCancel(){
    this.router.navigate(['/recipes']);
  }
}
