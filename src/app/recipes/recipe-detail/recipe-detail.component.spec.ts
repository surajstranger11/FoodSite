import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement, Predicate} from '@angular/core';
import {} from 'jasmine';
import { By } from '@angular/platform-browser';

import { RecipeDetailComponent } from './recipe-detail.component';

describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;
  let recipeDe:DebugElement;
  // let recipeEl:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
     //recipeDe  = fixture.debugElement.query(By.css('.Recipe'));
    // recipeEl = recipeDe.nativeElement;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
