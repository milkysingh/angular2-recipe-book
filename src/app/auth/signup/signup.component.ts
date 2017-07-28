import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  AuthService
} from "../../services/auth.service"
import {
  NgForm
} from "@angular/forms";
import { ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router,private route:ActivatedRoute) {}
 pass="";
@ViewChild('f')registerForm:NgForm
  ngOnInit() {}
  onSignup(form: NgForm) {
   
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
   this.router.navigate(["/signin"],{relativeTo:this.route});
  }
}
