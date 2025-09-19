import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { FlightComponent } from './components/flight/flight.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'flights', component: FlightComponent },
  { path: 'bookings', component: BookingComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
