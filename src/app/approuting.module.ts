import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective} from "./shared/dropdown.directive"
import { RecipeSelectComponent } from './recipes/recipe-select/recipe-select.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
const appRoute:Routes=[
    {path:"",redirectTo:"recipes",pathMatch:"full"},
    {path:"recipes",component:RecipesComponent,children:[
        {path:"",component:RecipeSelectComponent},
        {path:"new",component:RecipeEditComponent},
        {path:":id",component:RecipeDetailComponent},
        
        {path:":id/edit",component:RecipeEditComponent}
    ]},
    {path:"shoppinglist",component:ShoppingListComponent}
]



@NgModule({
 imports:[RouterModule.forRoot(appRoute)],
 exports:[RouterModule]
 }
)
export class AppRouting{
    
}