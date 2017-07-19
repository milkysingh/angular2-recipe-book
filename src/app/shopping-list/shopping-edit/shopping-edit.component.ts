import { Component, OnInit} from '@angular/core';
import { ShoppingService} from "../../services/shopping.service";
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }

add(name,amount){

 this.shoppingService.addData({ingredientName:name.value,ingredientNumber:amount.value});
 name.value="";
 amount.value=null;
}
}
