import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Ingredients
} from '../shared/ingredients.model'
import {
  ShoppingService
} from "../services/shopping.service";
import {
  Subscription
} from "rxjs/Subscription";
import {
  DatabaseService
} from "../services/database.service";
import {
  Response
} from "@angular/http";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[] = [];
  constructor(private shoppingService: ShoppingService, private databaseService: DatabaseService) {}
  private mySubscription: Subscription;
  ngOnInit() {
    this.ingredients = this.shoppingService.returnIngredients();
    this.mySubscription = this.shoppingService.changedIngredients.subscribe(
      (ingredient: Ingredients[]) => {
        this.ingredients = ingredient;
      }
    );
  }
  onEdit(index: number) {
    this.shoppingService.onEditing.next(index);
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
  saveCart() {
    this.databaseService.onSaveShoppingCart(this.ingredients).subscribe((
      (response: Response) => {
        console.log(response.json());
      }
    ));
  }
  fetchCart() {
    this.databaseService.onFetchShopppingCart().subscribe(
      (response: Response) => {
        this.shoppingService.updateCart(response.json());
      }
    )
  }

}
