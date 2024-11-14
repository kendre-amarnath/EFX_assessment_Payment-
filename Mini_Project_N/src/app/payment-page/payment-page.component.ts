import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
  products = [
    {
      name: 'Product 1',
      price: 29.99,
      quantity: 1,
      image: 'asserts/download.jpg',  // Image file in the assets folder
    },
    {
      name: 'Product 2',
      price: 149.99,
      quantity: 2,
      image: 'asserts/download2.jpg',  // Same image for this product
    },
  ];

  totalAmount = this.calculateTotal();

  increaseQuantity(index: number) {
    this.products[index].quantity++;
    this.totalAmount = this.calculateTotal();
  }

  decreaseQuantity(index: number) {
    if (this.products[index].quantity > 1) {
      this.products[index].quantity--;
      this.totalAmount = this.calculateTotal();
    }
  }

  calculateTotal() {
    return this.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  }

  shippingDetails = {
    email: '',
    contact: '',
    // amount: '',
    name: '',
    billingAddress: '',
  };

  placeOrder() {
    console.log('Order placed');
    // Razorpay integration logic goes here
  }
}
