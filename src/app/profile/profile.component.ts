import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface dataResponse {
  age?: string,
  birth_date?:string
  first_name?:string  
  gender?:string
  last_name?:string 
  username?:string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  
  firstname: string | null | undefined = ""
  lastname: string | null | undefined= ""
  gender: string | null | undefined= ""
  age: string | null | undefined= ""
  bdate: string | null| undefined = ""

  constructor(private _router: Router){}
  ngOnInit(){

    try {
      const data: dataResponse|null = JSON.parse(sessionStorage.getItem("data")||"");
      console.log(data)
      if (!data) {
        this._router.navigateByUrl("/")
      }

      this.firstname = data?.first_name;
      this.lastname = data?.last_name;
      this.gender = data?.gender;
      this.age = data?.age;
      this.bdate = data?.birth_date;
    } catch (error) {
      this._router.navigateByUrl("/")
    } 
  }

}
