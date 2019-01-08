import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  ingredientadded=new Subject<Ingredient[]>();
  ingredients:Ingredient[] =[
    new Ingredient('Chicken',500),new Ingredient('onion',500),
    new Ingredient('Garlic',50),new Ingredient('Ginger',20)
  ];
  constructor() { }
  addIngredient(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientadded.next(this.ingredients.slice());
  }
  addIngredients(ingredient:Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientadded.next(this.ingredients.slice());
  }
  getIngredients() {
    return this.ingredients.slice();
  }

}
