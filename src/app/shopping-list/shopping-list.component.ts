import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../Shared/Ingredient.model';
import { ShoppinglistService } from './shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients:Ingredient[] =[];
private subscription:Subscription;
  constructor(private shoppilnglistservice: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients=this.shoppilnglistservice.getIngredients();
    this.subscription=this.shoppilnglistservice.ingredientadded.
    subscribe(
      (data:Ingredient[] )=> {
        this.ingredients=data;
      }
    );
  }
ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
