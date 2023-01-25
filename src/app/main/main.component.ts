import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', "../../../node_modules/bulma/css/bulma.min.css"],
  
})

export class MainComponent implements OnInit{
 
  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  constructor(private _router: Router){}

  ngOnInit(){ 
      if (!sessionStorage.getItem("data")) this._router.navigateByUrl("/")
  }
}
