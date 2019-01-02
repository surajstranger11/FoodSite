// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { RecipeItemComponent } from './recipe-item.component';
// import {Recipe} from '../../recipes.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RecipeItemComponent} from './recipe-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecipeItemComponent', () => {
  let component: RecipeItemComponent;
  let fixture: ComponentFixture<RecipeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ RecipeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    // fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});


// describe('RecipeItemComponent', () => {
//   let fixture;
//   let component;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         RecipeItemComponent
//       ],
//       providers: [
//       ]
//     }).compileComponents();
//     fixture = TestBed.createComponent(RecipeItemComponent);
//     component = fixture.debugElement.componentInstance;
//   });

//   it('should create a component', async () => {
//     expect(component).toBeTruthy();
//   });


// });
