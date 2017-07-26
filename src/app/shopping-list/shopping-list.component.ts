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
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[] = [];
  constructor(private shoppingService: ShoppingService) {}
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

}
