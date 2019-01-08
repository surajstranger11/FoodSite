import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  ingredientadded=new Subject<Ingredient[]>();
  startedEditing= new Subject<number>();
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
  getIngredient(index:number) {
 return this.ingredients[index];
  }
  upadteIngredient(index:number, ingredient:Ingredient) {
    this.ingredients[index]=ingredient;
    this.ingredientadded.next(this.ingredients.slice());
  }
  deleteIngredients(index:number) {
    this.ingredients.splice(index,1);
    this.ingredientadded.next(this.ingredients.slice());
  }

}
