import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
// recipe:Recipe;
editMode=false;
recipeForm:FormGroup;
  constructor(private route:ActivatedRoute, private recipeservice:RecipeService,
    private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params)=> {
        this.index=+param['id'];
        this.editMode= param['id']!=null;
        this.initForm();
      }
      );
  }
  OnSubmit() {
    const newRecipe=new Recipe(
      this.recipeForm.value['names'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']);
      console.log((<FormArray>this.recipeForm.get('ingredients')).controls);
      console.log(this.recipeForm);
    if(this.editMode) {
      this.recipeservice.updateRecipe(this.index,newRecipe);
    } else {
      console.log(newRecipe);
      this.recipeservice.addRecipes(newRecipe);
    }
    this.onCancel();
  }
  getControls() {
    // console.log((<FormArray>this.recipeForm.get('ingredients')).controls);
    // console.log('log for names in getcontrol');
   // console.log((<FormArray>this.recipeForm.get('names')).controls);
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  AddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      this.formBuilder.group({
      //  new FormGroup({
          'name':new FormControl(null,Validators.required),
          'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        })
    );
    console.log(this.recipeForm);
  }
  onDelete(id:number) {
    console.log('ondelete clicked');
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(id);
  }
  onCancel() {
    // console.log('oncancel clicked');
    this.router.navigate(['../'], {relativeTo: this.route});

  }

  initForm() {
    let recipeName='';
    let recipeImage='';
    let recipeDescription='';
    const recipeIngredients=new FormArray([]);
    if(this.editMode) {
      const recipe=this.recipeservice.getRecipeByID(this.index);
      recipeName=recipe.name;
      recipeImage=recipe.imagePath;
      recipeDescription= recipe.description;
      if(recipe['ingredients']) {
        for(const ingredient of recipe.ingredients) {
        recipeIngredients.push(
        // new FormGroup({
          this.formBuilder.group({
            'name':new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
      );
      }
    }
    }
     // this.recipeForm=new FormGroup({
      this.recipeForm=this.formBuilder.group({
      'names':new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImage,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngredients
    });
    // console.log(this.recipeForm);
  }

}
