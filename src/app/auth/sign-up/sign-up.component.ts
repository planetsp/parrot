import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  signUp() {
    // CHECK for every field
    if (true) {
      console.log('pressed signup button');
    }
    this.authService.signUp();
  }
  cancel() {
    //return to previous page
  }

}
