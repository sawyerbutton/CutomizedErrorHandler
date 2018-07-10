import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {CustomErrorHandlerService} from './custom-error-handler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandlerService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
