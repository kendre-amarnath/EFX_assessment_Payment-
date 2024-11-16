// // import { CommonModule } from '@angular/common';
// // import { Component } from '@angular/core';
// // import { ActivatedRoute } from '@angular/router';
// // import { Router } from '@angular/router';
// // import { PaymentService } from '../services/paymentService.service';
// // import { OrderService, Order } from '../services/order.service';
// // @Component({
// //   selector: 'app-paystatus',
// //   standalone: true,
// //   imports: [CommonModule],
// //   templateUrl: './paystatus.component.html',
// //   styleUrl: './paystatus.component.css'
// // })
// // export class PaystatusComponent {

// //   constructor(private route:ActivatedRoute, private paymentService : PaymentService,private orderService: OrderService,private router: Router){}
// //   status:boolean = true
// //   order?: Order;
// //   ngOnInit(): void {
// //     this.route.queryParamMap.subscribe(params => {
// //       console.log(params.get("razorpay_payment_link_status"))
// //       if(params.get('razorpay_payment_link_status') == "paid"){
// //           console.log(params.get("razorpay_payment_link_reference_id"))
// //           this.status = true
// //           let i = params.get("razorpay_payment_link_reference_id")?.slice(3)
// //           this.paymentService.changeStatus(Number(i),"SUCCESS").subscribe(d => console.log(d))
// //       }
// //       else{
// //         console.log(params.get("razorpay_payment_link_reference_id"))
// //         this.status = false
// //         let i = params.get("razorpay_payment_link_reference_id")?.slice(3)
// //         this.paymentService.changeStatus(Number(i),"FAILED").subscribe(d => console.log(d))
// //       }
           
// //     }
    
// //     );
// //   }
// //   returnToHome() {
// //     this.router.navigate(['/home']);
// //   }

// // }
// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';
// import { PaymentService } from '../services/paymentService.service';
// import { OrderService, Order } from '../services/order.service';

// @Component({
//   selector: 'app-paystatus',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './paystatus.component.html',
//   styleUrls: ['./paystatus.component.css'], 
// })
// export class PaystatusComponent implements OnInit {
//   status: boolean = true; 
//   order?: Order; 

//   constructor(
//     private route: ActivatedRoute,
//     private paymentService: PaymentService,
//     private orderService: OrderService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.route.queryParamMap.subscribe(params => {
//       const paymentStatus = params.get('razorpay_payment_link_status');
//       const id = Number(this.route.snapshot.paramMap.get('id'));
  
//       if (isNaN(id)) {
//         console.error('Invalid Order ID');
//         return;
//       }
  
//       if (paymentStatus === 'paid') {
//         this.status = true;
//         this.paymentService
//           .changeStatus(id, 'SUCCESS')
//           .subscribe(d => console.log('Status updated to SUCCESS:', d));
//       } else {
//         this.status = false;
//         this.paymentService
//           .changeStatus(id, 'FAILED')
//           .subscribe(d => console.log('Status updated to FAILED:', d));
//       }
  
//       this.fetchOrderDetails(id);
//     });
//   }
  
//   fetchOrderDetails(orderId: number): void {
//     this.orderService.getOrderById(orderId).subscribe({
//       next: data => (this.order = data),
//       error: err => console.error('Error fetching order:', err),
//     });
//   }

//   returnToHome(): void {
//     this.router.navigate(['/home']);
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PaymentService } from '../services/paymentService.service';
import { OrderService, Order } from '../services/order.service';

@Component({
  selector: 'app-paystatus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paystatus.component.html',
  styleUrls: ['./paystatus.component.css'], // Fixed 'styleUrls'
})
export class PaystatusComponent implements OnInit {
  status: boolean = true;
  order?: Order;

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const paymentStatus = params.get('razorpay_payment_link_status');
      const referenceId = params.get('razorpay_payment_link_reference_id');
      const orderId = referenceId ? Number(referenceId.slice(3)) : undefined;

      if (orderId) {
        if (paymentStatus === 'paid') {
          this.status = true;
          this.paymentService
            .changeStatus(orderId, 'SUCCESS')
            .subscribe(d => console.log('Status updated to SUCCESS:', d));
        } else {
          this.status = false;
          this.paymentService
            .changeStatus(orderId, 'FAILED')
            .subscribe(d => console.log('Status updated to FAILED:', d));
        }

        // Fetch order details
        this.fetchOrderDetails(orderId);
      } else {
        console.error('Order ID is missing in query parameters');
      }
    });
  }

  fetchOrderDetails(orderId: number): void {
    this.orderService.getOrderById(orderId).subscribe({
      next: data => {
        this.order = data;
        console.log('Fetched order:', this.order);
      },
      error: err => console.error('Error fetching order:', err),
    });
  }

  returnToHome(): void {
    this.router.navigate(['/home']);
  }
}

