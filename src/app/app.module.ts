import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MainComponent} from "./components/main/main.component";
import {BandlistComponent} from "./components/bandList/bandlist.component";
import {BandlistItemComponent} from "./components/bandList/bandListItem/bandListItem.component";
import {SearchInputComponent} from "./components/searchInput/searchInput.component";
import {TaxPipe} from "./pipes/tax.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    BandlistComponent,
    BandlistItemComponent,
    SearchInputComponent,

    /* */
    TaxPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
