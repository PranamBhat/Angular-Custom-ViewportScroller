import { NgModule, ɵɵinject, ErrorHandler } from '@angular/core';
import { CommonModule, ViewportScroller, DOCUMENT, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { CustomViewportScroller } from './custom-viewport-scroller';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, ComponentTwoComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ViewportScroller,
      useFactory: () => new CustomViewportScroller('content-scroller', ɵɵinject(DOCUMENT), window, ɵɵinject(ErrorHandler))
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
})
export class AppModule { }
