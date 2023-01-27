import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

interface registerResponse {
  message?: string,
  statusCode?: string,
  data?: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('gender') gender!: ElementRef; 
  genderSelect: ""

  constructor(private http:HttpClient, private dialog:MatDialog){}

  onRegister(registerData: {username: string, password: string, first_name: string, last_name: string, age: number, gender: string, birth_date: string}) {
    registerData.gender=this.genderSelect;
    this.http.post("http://localhost:8000/user/register", registerData).subscribe((res) => {
      const response: registerResponse = res
      this.dialog.open(DialogComponent, {
        data: {
          header: response.statusCode == "200" ? "Welcome" : "Ops!",
          message: response.message,
          statusCode: response.statusCode,
          hideRegister: true
        },
        height: '200px',
        width: '500px',
      });
    }) 
  }
  onSelected():void {
		this.genderSelect = this.gender.nativeElement.value;
    console.log(this.genderSelect)
	}
}
