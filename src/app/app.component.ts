import {
  Component,
  OnInit
} from '@angular/core';
import {RecipeService}from"./services/recipe.service";
import { ShoppingService} from "./services/shopping.service";
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 providers:[RecipeService,ShoppingService]
})
export class AppComponent implements OnInit {
  showRecipe: boolean = true;
  showShoppinglist: boolean;
  getRequest(val: {
    recipeVal: boolean,
    shoppingVal: boolean
  }) {
    this.showRecipe = val.recipeVal;
    this.showShoppinglist = val.shoppingVal;
  }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBO57qdzeQsJtv7UoPPY-qRTGhFH4gK44Q",
    authDomain: "my-recipe-book-97ee7.firebaseapp.com"
    });
  }
}
