import { ShoppinglistService } from './../services/shoppinglist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {



  constructor(public shoppingListService: ShoppinglistService) { }

  editItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }



}
