import { Component, OnInit ,ElementRef, ViewChild, OnDestroy} from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
   @ViewChild('form') slForm:NgForm;
  // @ViewChild('amountInput') amountInputRef:ElementRef;
  name:string;
  amount:number;
  editSubscription:Subscription;
  editMode=false;
  editedIndexItem: number;
  editedItem:Ingredient;
  //form:NgForm;

  constructor(private shoppinglistservice:ShoppinglistService) {}

  ngOnInit() {
    this.editSubscription=this.shoppinglistservice.startedEditing.subscribe(
      (index:number)=>{
      this.editedIndexItem=index;
        this.editMode=true;
        this.editedItem=this.shoppinglistservice.getIngredient(this.editedIndexItem);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
      });
      }
    );
  }
  OnAddItem(form:NgForm) {
     // const nameInput=this.namedInputRef.nativeElement.value;
  const nameInput=form.value.name;
  const amountInput=form.value.amount;
  const ingredient=new Ingredient(nameInput,amountInput);
  if(this.editMode){
    this.shoppinglistservice.upadteIngredient(this.editedIndexItem,ingredient);
    
  }
  else{
    this.shoppinglistservice.addIngredient(ingredient);
  }
  this.editMode=false;
  this.slForm.reset();
}
onClear(){
  this.editMode=false;
  this.slForm.reset();
}
onDelete(){
  this.shoppinglistservice.deleteIngredients(this.editedIndexItem);
  this.onClear();
}
ngOnDestroy(){
  this.editSubscription.unsubscribe();
}
}
