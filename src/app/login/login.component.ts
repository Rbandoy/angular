import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

interface loginResponse {
  message?: string,
  statusCode?: string,
  data?: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  deviceXs: boolean;

  constructor(private http:HttpClient, private dialog: MatDialog, private _router: Router){}

  ngOnInit(): void {
     if (sessionStorage.getItem("data")) {
      this._router.navigateByUrl("/main")
     }
  }

  onLogin(loginData:  {
    username: string,
    password: string
  }) {
    // call nodejs application api
     this.http.post("http://localhost:8000/user/login", loginData).subscribe((res) => {
      const response: loginResponse = res
      this.dialog.open(DialogComponent, {
        data: {
          header: response.statusCode == "200" ? "Welcome" : "Ops!",
          message: response.message,
          statusCode: response.statusCode,
          hideRegister: response.statusCode == "200" ? true : false,
        },
        height: '200px',
        width: '500px',
      });
      if (response.statusCode == "200") {
        this.deviceXs = true;
        sessionStorage.setItem("data", JSON.stringify(response.data) )
        this._router.navigateByUrl("/main")
      }
    }) 
  }
 
}
