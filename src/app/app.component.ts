import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  title = "contact-app"
   constructor(private http:HttpClient) {}
   
  //initial value
  display:boolean = false;
  //variable to hold values 
  name:string = ""
  numbervariable!:bigint
  
  change(){
    this.display = true;
  }
  add(){
    //should pass to the backend
  }
}
