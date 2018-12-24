import { Component, OnInit ,ElementRef, ViewChild, Output, EventEmitter} from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('namedInput') namedInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  @Output() ingredientAdded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  OnAddItem() {
  const nameInput=this.namedInputRef.nativeElement.value;
  const amountInput=this.amountInputRef.nativeElement.value;
const ingredient=new Ingredient(nameInput,amountInput);
this.ingredientAdded.emit(ingredient);
}
}
