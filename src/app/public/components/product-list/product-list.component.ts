import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  template: `
      <div class="row" id="productsGrid">

        <div class="col-lg-4 col-md-6 mb-4" *ngFor="let product of products">
          <div class="card product-card h-100">
            <img src="{{ product.image_url }}" class="card-img-top product-image" alt="{{ product.description }}">
            <div  class="card-body d-flex flex-column">
              <h5 class="card-title">{{ product.name }}</h5>
              <div class="mt-auto">
                <div class="mb-2">
                  <span class="price">{{ product.price }}</span>
                  <span class="original-price ms-2">{{ product.original_price }}</span>
                </div>
                <button class="btn btn-primary w-100" (click)="addToCart(product)">
                  <i class="fas fa-cart-plus me-1"></i>Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

  `,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    private productService = inject(ProductService);
    private cartService = inject(CartService);

    products:any[] = [];

    constructor() {
        this.loadProducts();
    }

    async loadProducts() {
        this.products = await this.productService.getAll();
    }    

    /* Shoppping cart*/
    addToCart(product: any) {
      product.quantity = 1;
      this.cartService.addToCart(product);
    }


}
