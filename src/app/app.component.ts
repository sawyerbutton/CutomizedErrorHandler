import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  public throwError() {
    throw new Error('Something bad happened!');
    // this error will be caught by the customized error handler
  }
}
