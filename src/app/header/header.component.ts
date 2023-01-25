import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() deviceXs: boolean;
  constructor(private _router: Router){}
  
  logout() {
    sessionStorage.removeItem("data");
    this._router.navigateByUrl("/")
  }
}

