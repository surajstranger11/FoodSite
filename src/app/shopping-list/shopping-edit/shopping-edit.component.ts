import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('namedInput') namedInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  name:string;
amount:number;

  constructor(private shoppinglistservice:ShoppinglistService) {}

  ngOnInit() {
  }
  OnAddItem() {
  const nameInput=this.namedInputRef.nativeElement.value;
  const amountInput=this.amountInputRef.nativeElement.value;
const ingredient=new Ingredient(nameInput,amountInput);
this.shoppinglistservice.addIngredients(ingredient);
}
}
