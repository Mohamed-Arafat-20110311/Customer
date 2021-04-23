import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockComponent } from './stock/stock.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule  } from 'ngx-filter-pipe';
import { PipesFiltersModule } from 'ng-pipe-filter'
import { StockFilterPipe } from './stock/stock-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    StockFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FilterPipeModule,
    PipesFiltersModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
