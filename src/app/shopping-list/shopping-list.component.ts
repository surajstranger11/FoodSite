import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../Shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[] =[
  new Ingredient('Chicken',500),new Ingredient('onion',500),new Ingredient('Gralic',50),new Ingredient('Ginger',20)
];
  constructor() { }

  ngOnInit() {
  }
  OnIngredientAdded(Ingredient:Ingredient){
this.ingredients.push(Ingredient);
  }
}
