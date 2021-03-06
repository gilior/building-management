import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavComponent} from './common/nav/nav.component';
import {WorksComponent} from './works/works.component';
import {InboxComponent} from './inbox/inbox.component';
import {AppRoutesModule} from "./app-routes";
import {TableComponent} from './table/table.component';
import {HttpClientModule} from "@angular/common/http";
import {ApartmentsModule} from "./apartments-module/apartments.module";
import {SharedModule} from "./common/shared.module";
import {StoreModule} from "./store/store.module";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WorksComponent,
    InboxComponent,
    TableComponent,

  ],
  imports: [
    SharedModule,
    StoreModule,
    ApartmentsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
