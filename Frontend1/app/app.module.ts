import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';             
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { FlightComponent } from './components/flight/flight.component';
import { BookingComponent } from './components/booking/booking.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FlightComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    FormsModule        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
