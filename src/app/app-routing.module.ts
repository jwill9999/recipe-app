import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeListTemplateComponent } from './recipes/recipe-list/recipe-item/recipe-list-template/recipe-list-template.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';


const appRouter: Routes = [
  {
    path: "", redirectTo: "recipes", pathMatch: "full"
  },
  {
    path: "recipes", component: RecipesComponent, children: [
      { path: "", component: RecipeListTemplateComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  },
  {
    path: "shopping-list", component: ShoppingListComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{};
