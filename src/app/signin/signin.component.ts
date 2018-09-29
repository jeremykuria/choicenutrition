import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
  ngSignin(form: NgForm) {
    console.log("signing in...");
    this.authservice.signin(form.value.email, form.value.password)
      .subscribe(
      response => console.log(response),
      error => console.error()
      
    )
    console.log('')
  }

} 
