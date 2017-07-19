import {
  Component
} from '@angular/core';
import {RecipeService}from"./services/recipe.service";
import { ShoppingService} from "./services/shopping.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 providers:[RecipeService,ShoppingService]
})
export class AppComponent {
  showRecipe: boolean = true;
  showShoppinglist: boolean;
  getRequest(val: {
    recipeVal: boolean,
    shoppingVal: boolean
  }) {
    this.showRecipe = val.recipeVal;
    this.showShoppinglist = val.shoppingVal;
  }
}
