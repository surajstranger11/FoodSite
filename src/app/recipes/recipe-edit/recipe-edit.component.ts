import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
index:number;
recipe:Recipe;
editMode=false;
recipeForm:FormGroup;
  constructor(private router:ActivatedRoute, private recipeservice:RecipeService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.router.params.subscribe(
      (param:Params)=> {
        this.index=+param['id'];
        this.editMode= param['id']!=null;
        this.initForm();
      }
      );
  }
  OnSubmit(){
    console.log(this.recipeForm);
  }
  initForm() {
    let recipeName='';
    let recipeImage='';
    let recipeDescription='';
    let recipeIngredients=new FormArray([]);
    if(this.editMode) {
      const recipe=this.recipeservice.getRecipeByID(this.index);
      recipeName=recipe.name;
      recipeImage=recipe.imagePath;
      recipeDescription= recipe.description;
      if(recipe['ingredients'])
      {
        for(let ingredient of recipe.ingredients)
        {
        recipeIngredients.push(
        //new FormGroup(
          this.formBuilder.group({
            'name':new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
      );
      }
    }
    }
    //this.recipeForm=new FormGroup({
      this.recipeForm=this.formBuilder.group({
      'names':new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImage,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngredients
    });
    //console.log(this.recipeForm);
  }
  getControls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  AddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).controls.push(
      this.formBuilder.group(
        {
          'name':new FormControl(null,Validators.required),
          'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }
      )
    );
  }
}
