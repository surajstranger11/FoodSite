import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../Shared/Ingredient.model';
import { ShoppinglistService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[] =[];
  constructor(private shoppilnglistservice: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients=this.shoppilnglistservice.getIngredients();
    this.shoppilnglistservice.ingredientadded.
    subscribe(
      (data:Ingredient[] )=> {
        this.ingredients=data;
      }
    );
  }

}
