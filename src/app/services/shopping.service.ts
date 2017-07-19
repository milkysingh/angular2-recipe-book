import{ Ingredients } from '../shared/ingredients.model';
import{Subject} from "rxjs/Subject"
export class ShoppingService{
changedIngredients=new Subject<Ingredients[]>();

   private ingredients: Ingredients[]=[];
  addData(val:{ingredientName:string,ingredientNumber:number}){
    this.ingredients.push(new Ingredients(val.ingredientName,val.ingredientNumber));
     this.changedIngredients.next(this.ingredients.slice());
  }
  returnIngredients(){
      return this.ingredients.slice();
     
  }
  addToCart(ingredient:Ingredients[]){
   this.ingredients.push(...ingredient);
   this.changedIngredients.next(this.ingredients.slice());

  }


}
