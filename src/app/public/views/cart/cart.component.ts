declare var bootstrap: any;
import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { showAlert } from '../../utils/functions';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartItemComponent],
  template: `
    <div class="modal fade" id="cartModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Carrito de Compras</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">

                    <app-cart-item></app-cart-item>

                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <h5>Total: <span id="cartTotal">{{ this.getTotalPrice() }}</span></h5>
                        <div>
                            <button class="btn btn-secondary" (click)="clearCart()">Vaciar</button>
                            <button class="btn btn-success" (click)="checkout()" id="checkoutBtn">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
  styleUrl: './cart.component.css'
})
export class CartComponent{
    private cartService = inject(CartService);
    private authService = inject(AuthService);

    clearCart() {
        this.cartService.clearCart();
    }

    getTotalPrice() {
        return this.cartService.getTotalPrice();
    }

    getTotalQuantity() {
        return this.cartService.getTotalQuantity();
    }

    checkout() {
        
        if (this.cartService.getTotalQuantity() === 0) {
            showAlert('El carrito está vacío', 'warning');
            return;
        }

        else if (!this.authService.isLoggedIn()) {
            showAlert('Debes iniciar sesión para comprar', 'warning');
            bootstrap.Modal.getInstance(document.getElementById('cartModal')).hide();
            new bootstrap.Modal(document.getElementById('loginModal')).show();
            return;
        }

        this.clearCart();
        bootstrap.Modal.getInstance(document.getElementById('cartModal')).hide();
        showAlert('Pedido realizado con éxito', 'success');
    }
}
