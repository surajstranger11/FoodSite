import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SigninComponent } from './signin/signin.component';


const appRoutes:Routes=[
    { path:'', redirectTo:'/signin', pathMatch:'full'},
    { path:'recipes', component:RecipesComponent, children:
[
    {path:'', component:RecipeStartComponent},
    {path:'new', component:RecipeEditComponent},
    {path:':id', component:RecipeDetailComponent},
    {path:':id/edit', component:RecipeEditComponent},
]},
    { path:'shopping-list', component:ShoppingListComponent, children:
    [
        {path:'edit', component:ShoppingEditComponent}
    ]},
    {path:'signin', component:SigninComponent},
];

@NgModule({
    // imports:[RouterModule.forRoot(appRoutes, {useHash:true})],
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}
