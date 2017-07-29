import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { RouterModule,Routes } from "@angular/router";
import { AppRouting } from "./approuting.module";
import { DatabaseService } from "./services/database.service";
import { HttpModule } from "@angular/http";
import { RecipeService } from "./services/recipe.service";
import { ShoppingService } from "./services/shopping.service";
import {AuthService  } from "./services/auth.service";
import {  AuthGuard} from "./auth/auth-guard-.service";
import { SharedModule } from "./shared/shared.module";
import {  ShoppingModule} from "./shopping-list/shopping.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,  
   AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    ShoppingModule,
    AuthModule,
    CoreModule
  ],
  providers: [DatabaseService,ShoppingService,RecipeService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
