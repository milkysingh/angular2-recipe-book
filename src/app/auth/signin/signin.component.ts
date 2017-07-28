import { Component, OnInit,ViewChild } from '@angular/core';
import {
  AuthService
} from "../../services/auth.service"
import {
  NgForm
} from "@angular/forms";
import { ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router,private route:ActivatedRoute) {}
@ViewChild('f')loginForm:NgForm
  ngOnInit() {

  }
  onSignin(form :NgForm){
const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email,password);
this.loginForm.reset();

  }

}
