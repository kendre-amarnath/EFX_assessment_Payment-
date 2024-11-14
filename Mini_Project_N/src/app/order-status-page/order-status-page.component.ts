// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// @Component({
//   selector: 'app-order-status-page',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './order-status-page.component.html',
//   styleUrl: './order-status-page.component.css'
// })
// export class OrderStatusPageComponent {
//   paymentStatus: string = 'success';  // Change to 'failure' to test the other case

//   constructor(private router: Router) {}

//   // Method to navigate back to the home page or another route
//   returnToHome() {
//     this.router.navigate(['/home']); 
// }
// }
// import { CommonModule } from '@angular/common';
// import { Component, NgModule } from '@angular/core';
// import { ActivatedRoute, Router, RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-order-status-page',
//   standalone: true,  // Mark the component as standalone
//   imports: [CommonModule,RouterModule],  // Import any other components or directives if needed
//   templateUrl: './order-status-page.component.html',
//   styleUrls: ['./order-status-page.component.css']
// })
// export class OrderStatusPageComponent {
//   paymentStatus: string = '';

//   constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

//   ngOnInit(): void {
//     // Read the 'paymentStatus' query parameter from the URL
//     this.paymentStatus = this.activatedRoute.snapshot.queryParamMap.get('paymentStatus') || 'failure';
//   }

//   returnToHome() {
//     this.router.navigate(['/home']);
//   }
// }
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-status-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-status-page.component.html',
  styleUrls: ['./order-status-page.component.css']
})
export class OrderStatusPageComponent {
  paymentStatus: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Read the 'paymentStatus' query parameter from the URL
    this.paymentStatus = this.activatedRoute.snapshot.queryParamMap.get('paymentStatus') || 'failure';
  }

  returnToHome() {
    this.router.navigate(['/home']);
  }
}
