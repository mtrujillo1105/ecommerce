import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    ProductListComponent
  ],
  template: `
    <section id="products" class="py-5">
        <div class="container">
            <h2 class="section-title">Nuestros Productos</h2>
            
            <!-- Filters -->
            <div class="row mb-4">
                <div class="col-md-6">
                    <select class="form-select" id="categoryFilter">
                        <option value="">Todas las categorías</option>
                        <option value="smartphones">Smartphones</option>
                        <option value="laptops">Laptops</option>
                        <option value="accessories">Accesorios</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" id="searchInput" placeholder="Buscar productos...">
                </div>
            </div>
            
            <!-- Products Components -->
            <app-product-list></app-product-list>


        </div>
    </section>
  `,
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
