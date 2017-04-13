import { ShoppinglistService } from './../services/shoppinglist.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent  {



 constructor(private shoppingListService: ShoppinglistService){}




}
