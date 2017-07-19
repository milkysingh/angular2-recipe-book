import {
  Recipe
} from "../recipes/recipe.model"
import{Ingredients} from "../shared/ingredients.model"

export class RecipeService {
 // recipeSelected = new EventEmitter < Recipe > ();
 
  private recipe: Recipe[] = [
    new Recipe("Masala Paneer Recipe", 
    "This is for testing purposes", 
    "http://curryindian.com/wp-content/uploads/2014/01/W_paneerButtermasala1.jpg",
    [new Ingredients("paneer",1),
     new Ingredients("tomatoes",4)]
     ),

    new Recipe("Momos Recipe",
     "This is for testing purposes",
     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg",
     [new Ingredients("Chicken",1),
     new Ingredients("flour",20)])
  ];

  getRecipes() {
    return this.recipe.slice();
  }
  getRecipeDetail(id:number){

return this.recipe[id];
    
  }

  
}
