import {
  Http,
  Response
} from "@angular/http";
import {
  Injectable
} from "@angular/core";
import {
  Recipe
} from "../recipes/recipe.model";
import "rxjs/Rx";

import {
  ShoppingService
} from "./shopping.service";
import {
  Ingredients
} from "../shared/ingredients.model"
@Injectable()
export class DatabaseService {
  constructor(private http: Http, private shoppingService: ShoppingService) {}
  onSaveData(recipes: Recipe[]) {
    return this.http.put("https://my-recipe-book-97ee7.firebaseio.com/recipebook.json", recipes).map(
      (response) => {
        console.log(response);
      }
    );
  }
  onFetchData() {


    return this.http.get("https://my-recipe-book-97ee7.firebaseio.com/recipebook.json");
  }

  onSaveShoppingCart(ingredients: Ingredients[]) {
    return this.http.put("https://my-recipe-book-97ee7.firebaseio.com/shoppingCart/cart.json", ingredients);
  }

  onFetchShopppingCart() {

    return this.http.get("https://my-recipe-book-97ee7.firebaseio.com/shoppingCart/cart.json");
  }


}
