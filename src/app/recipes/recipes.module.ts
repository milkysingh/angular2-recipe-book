import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeSelectComponent } from "./recipe-select/recipe-select.component";
import { RecipeRouting } from "./recipe-routing.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
@NgModule({
    declarations:[
     RecipesComponent,
     RecipeListComponent,
     RecipeItemComponent,
     RecipeDetailComponent,
     RecipeEditComponent,
     RecipeSelectComponent,
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RecipeRouting,
        SharedModule
    ]

})
export class RecipesModule{

}