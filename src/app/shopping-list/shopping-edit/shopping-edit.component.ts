import { ShoppinglistService } from './../../services/shoppinglist.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppinglistService: ShoppinglistService) { }

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;


  addIngredients() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.shoppinglistService.addIngredients(newIngredient)
  }

}
