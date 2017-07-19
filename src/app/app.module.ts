import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective} from "./shared/dropdown.directive"
import { RouterModule,Routes } from "@angular/router";
import { AppRouting } from "./approuting.module";
import { RecipeSelectComponent } from './recipes/recipe-select/recipe-select.component';
import { AppDropdownClickDirective } from "./shared/app-dropdown-click.directive";
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeSelectComponent,
    AppDropdownClickDirective,
    RecipeEditComponent
    
   
    
  ],
  imports: [
    BrowserModule,
   AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
