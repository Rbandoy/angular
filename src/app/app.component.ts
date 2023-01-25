import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  mediaSub: Subscription | undefined;
 
  constructor(public mediaObserver: MediaObserver){}
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((res) => {
   
     
      
    })
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe()
  }
  title = 'app';
}
