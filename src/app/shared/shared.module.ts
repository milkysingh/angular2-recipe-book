import { NgModule } from "@angular/core";
import { DropdownDirective} from "./dropdown.directive"
import {  CommonModule} from "@angular/common";
import { AppDropdownClickDirective } from "../shared/app-dropdown-click.directive";
@NgModule({

    declarations:[
        DropdownDirective,
        AppDropdownClickDirective
    ],
    exports:[
        CommonModule,
DropdownDirective,AppDropdownClickDirective
    ]
})
export class SharedModule{


} 