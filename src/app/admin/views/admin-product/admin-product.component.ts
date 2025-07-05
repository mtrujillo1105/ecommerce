import { Component, inject } from '@angular/core';
import { AdminProductService } from '../../services/admin-product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  template: `
        <!-- Products Section -->
        <div id="products" class="page-section active">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3>Gestión de Productos</h3>
                <button class="btn btn-primary btn-custom" data-bs-toggle="modal" data-bs-target="#productModal">
                    <i class="bi bi-plus-circle"></i> Nuevo Producto
                </button>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Buscar productos...">
                        </div>
                        <div class="col-md-3">
                            <select class="form-select">
                                <option>Todas las categorías</option>
                                <option>Electrónicos</option>
                                <option>Ropa</option>
                                <option>Hogar</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-select">
                                <option>Todos los estados</option>
                                <option>Activo</option>
                                <option>Inactivo</option>
                            </select>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let product of products">
                                    <td><img [src]="product.image_url" class="product-img" alt="Producto"></td>
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.category.name }}</td>
                                    <td>{{ product.price }}</td>
                                    <td>{{ product.stock }}</td>
                                    <td>
                                        <span class="badge bg-success" *ngIf="product.is_active">Activo</span>
                                        <span class="badge bg-warning" *ngIf="!product.is_active">>Inactivo</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-pencil"></i></button>
                                        <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <nav>
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled"><a class="page-link" href="#">Anterior</a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
  `,
  styleUrl: './admin-product.component.css'
})
export class ProductComponent {
    private adminProductService = inject(AdminProductService);

    products: any[] = [];

    constructor() {
        this.loadProducts();
    }

    async loadProducts() {
        this.products = await this.adminProductService.getAll();
                console.log(this.products);
    }

}
