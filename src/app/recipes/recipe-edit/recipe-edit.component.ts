import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
index:number;
recipe:Recipe;
editMode=false;
  constructor(private router:ActivatedRoute, private recipeservice:RecipeService) { }

  ngOnInit() {
    this.router.params.subscribe(
      (param:Params)=>{
        this.index=+param['id'];
        this.editMode= param['id']!=null;
        //this.recipe=this.recipeservice.getRecipeByID(this.index);

      }
        
           );
  }

}
