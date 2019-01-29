import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../Shared/Ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
recipesChanged= new Subject<Recipe[]>();

  private recipes: Recipe[]= [
    new Recipe(
      'Chilli Chicken Recipe','Home made chilli Chicken',
      // 'Imagepathforchillichicken',
     'https://c1.staticflickr.com/1/144/319252903_bc92dbc703_b.jpg',
    [
      new Ingredient('Chicken',1000),new Ingredient('Onion',500),
      // new Ingredient('Garlic',50),new Ingredient('Ginger',20)
    ]
    ),
    new Recipe('Sweet Pulao','Bengali style Sweet Pulao',
    // 'Imagepathforpulao',
    'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg',
    [
      new Ingredient('Rice',500),new Ingredient('Cashew',100),
      // new Ingredient('Garlic',50),new Ingredient('Ginger',20)

    ])
  ];
  recipeselectedevent=new EventEmitter<Recipe>();
  constructor() { }
  getAllRecipes() {
    return this.recipes.slice();
  }
  getRecipeByID(index:number) {
return this.recipes[index];
  }
  addRecipes(recipe:Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe:Recipe) {
    this.recipes[index]=newRecipe;
    this.recipesChanged.next(this.recipes.slice());

  }
  deleteRecipe(index:number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
