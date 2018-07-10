import {ErrorHandler, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {

  constructor() { }
  handleError(error) {
    console.warn('Handler caught an error', error);
    alert(error);
    // code below  log the info to a server, display a nice error notification
    // throw error;
  }
}
