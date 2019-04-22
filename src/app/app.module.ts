import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AppComponent } from './app.component';  // uncomment this line if you want to test locally.
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';
import {createCustomElement} from '@angular/elements';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [PopupService],
  // declarations: [AppComponent, PopupComponent], // uncomment this line if you want to test locally.
  declarations: [PopupComponent],
  // bootstrap: [AppComponent],  // uncomment this line if you want to test locally.
  entryComponents: [PopupComponent],
})
export class AppModule {

    constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

  // comment this line below out if you want to test locally.
  ngDoBootstrap() {}

}
