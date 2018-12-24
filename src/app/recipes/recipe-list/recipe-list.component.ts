import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[]= [
   new Recipe('Chilli Chicken Recipe','Home made chilli Chicken',
   'https://c1.staticflickr.com/1/144/319252903_bc92dbc703_b.jpg'),
   new Recipe('Sweet Pulao','Bengali style Sweet Pulao',
   'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg')
 ];
 @Output() recipeWasSelected=new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  OnRecipeSelected(recipeselected:Recipe) {
this.recipeWasSelected.emit(recipeselected);
  }
}
