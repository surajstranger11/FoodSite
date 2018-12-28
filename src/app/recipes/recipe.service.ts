import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[]= [
    new Recipe('Chilli Chicken Recipe','Home made chilli Chicken',
    'https://c1.staticflickr.com/1/144/319252903_bc92dbc703_b.jpg'),
    new Recipe('Sweet Pulao','Bengali style Sweet Pulao',
    'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg')
  ];
  recipeselectedevent=new EventEmitter<Recipe>();
  constructor() { }
  getAllRecipes() {
    return this.recipes.slice();
  }
}
