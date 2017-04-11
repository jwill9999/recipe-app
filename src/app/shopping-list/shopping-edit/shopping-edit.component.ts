import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent  {

@Output() addIng  = new EventEmitter<Ingredient>();

@ViewChild('nameInput') nameInput: ElementRef;
@ViewChild('amountInput') amountInput: ElementRef;



  addIngredients(){
     const ingName = this.nameInput.nativeElement.value;
     const ingAmount = this.amountInput.nativeElement.value;
     const newIngredient = new Ingredient(ingName,ingAmount);
     this.addIng.emit(newIngredient);
  }
}
