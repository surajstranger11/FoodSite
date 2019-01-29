import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription:Subscription;
 recipes: Recipe[]= [];
  constructor(private recipeservice:RecipeService) { }

  ngOnInit() {
    this.subscription= this.recipeservice.recipesChanged
    .subscribe(
      (recipes:Recipe[])=> {
        this.recipes=recipes;
      }
    );

    this.recipes=this.recipeservice.getAllRecipes();

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
