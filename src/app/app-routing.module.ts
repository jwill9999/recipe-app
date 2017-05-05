import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeListTemplateComponent } from './recipes/recipe-list/recipe-item/recipe-list-template/recipe-list-template.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { LogininRouteGuard } from './services/loginin-route.guard';


const appRouter: Routes = [
  {
    path: "", redirectTo: "recipes", pathMatch: "full"
  },
  {
    path: "recipes", component: RecipesComponent, children: [
      { path: "", component: RecipeListTemplateComponent },
      { path: "new", component: RecipeEditComponent, canActivate: [LogininRouteGuard] },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent, canActivate: [LogininRouteGuard] }
    ]
  },
  {
    path: "shopping-list", component: ShoppingListComponent, canActivate: [LogininRouteGuard]
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
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
