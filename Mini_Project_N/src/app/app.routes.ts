// import { Routes } from '@angular/router';
// import { OrderStatusPageComponent } from './order-status-page/order-status-page.component';

// export const routes: Routes = [
//     { path: 'order-status', component: OrderStatusPageComponent },
// ];
import { Routes } from '@angular/router';
import { OrderStatusPageComponent } from './order-status-page/order-status-page.component'; // Adjust path if needed
import { PaymentPageComponent } from './payment-page/payment-page.component'; // Assuming you have a HomePageComponent

export const routes: Routes = [
  { path: 'order-status', component: OrderStatusPageComponent },
  { path: 'home', component: PaymentPageComponent },  // Define your home route
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // Add more routes as necessary
];
