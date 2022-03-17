
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { of, from, fromEvent, interval, Observable } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('button',{static:true}) button;
  clicks$:Observable<any>;
 
  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click');
    this.switchExample();
  }
 
  switchExample() {
    this.clicks$
      .pipe(
        switchMap(() => {
          return interval(500)
        })
      )
      .subscribe( val => console.log(val));
  }
}
