import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppinglistService } from 'src/app/shopping-list/shoppinglist.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  RecipeFinallyRecived: Recipe;
  id:number;
  constructor(private shoppingservice:ShoppinglistService, private route:ActivatedRoute,
    private recipeservice:RecipeService, private router:Router ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params)=> {
        this.id=+param['id'];
        this.RecipeFinallyRecived=this.recipeservice.getRecipeByID(this.id);
      }
    );
    }
    AddIngredientsToRecipe() {
      // (this.RecipeFinallyRecived.ingredients).forEach(element => {
      //   this.shoppingservice.addIngredients(element);
      // });
       this.shoppingservice.addIngredients(this.RecipeFinallyRecived.ingredients);
    }
    onDeleteRecipe() {
      // console.log('delete recipe clicked');
      this.recipeservice.deleteRecipe(this.id);
      this.router.navigate(['/recipes']);
    }
}
