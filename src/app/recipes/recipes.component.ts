import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeReceive:Recipe;
  constructor(private recipeservice:RecipeService) { }

  ngOnInit() {
    this.recipeservice.recipeselectedevent
    .subscribe(
      (recipe:Recipe)=>{
        this.recipeReceive=recipe;
      }
    );
  }
}
