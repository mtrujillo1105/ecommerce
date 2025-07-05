import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule],
  template: `
    <div id="cartItems">

      <div class="cart-item" *ngFor="let item of cart | async; let i = index">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h6>{{ item.name }}</h6>
            <small class="text-muted">{{ item.price }}</small>
          </div>
          <div class="col-md-3">
              <div class="input-group">
                <button class="btn btn-outline-secondary btn-sm" (click)="updateQuantity(item.id, -1)">-</button>
                <span class="form-control form-control-sm text-center">{{ item.quantity }}</span>
                <button class="btn btn-outline-secondary btn-sm" (click)="updateQuantity(item.id, 1)">+</button>
              </div>
          </div>
          <div class="col-md-2">
            <strong>{{ item.quantity * item.price }}</strong>
          </div>
          <div class="col-md-1">
            <button class="btn btn-sm btn-outline-danger" (click)="removeFromCart(item.id)">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  `,
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
    private cartService = inject(CartService);
    cart  = this.cartService.getCartItems();
    count$ = this.cartService.itemCount$;

    updateQuantity(productId: number, amount: number) {
        this.cartService.updateQuantity(productId , amount);
    }

    removeFromCart(productId: number) {
      this.cartService.removeFromCart(productId);
    }
}
