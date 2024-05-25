import { Component, NgModule } from '@angular/core';
import { MainService } from '../main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  greeting: any = "";
  loading = true;
  buttonLoader : boolean = false;

  constructor(private mainService: MainService){}


  // onSubmit() {
  //   this.loading = true;

  //   // Simulate a login process
  //   setTimeout(() => {
  //     this.loading = false;
  //     // Handle login success
  //   }, 2000); // Adjust the timeout to simulate the actual login process
  // }


  submitButton(){
  this.buttonLoader = true;
  }


}
