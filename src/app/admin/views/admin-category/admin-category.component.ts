import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  template: `
        <!-- Categories Section -->
        <div id="categories" class="page-section active">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3>Gestión de Categorías</h3>
                <button class="btn btn-primary btn-custom" data-bs-toggle="modal" data-bs-target="#categoryModal">
                    <i class="bi bi-plus-circle"></i> Nueva Categoría
                </button>
            </div>

            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead class="table-light">
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Productos</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Electrónicos</td>
                                            <td>Dispositivos electrónicos y tecnología</td>
                                            <td>156</td>
                                            <td><span class="badge bg-success">Activo</span></td>
                                            <td>
                                                <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-pencil"></i></button>
                                                <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Ropa</td>
                                            <td>Vestimenta y accesorios</td>
                                            <td>89</td>
                                            <td><span class="badge bg-success">Activo</span></td>
                                            <td>
                                                <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-pencil"></i></button>
                                                <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Hogar</td>
                                            <td>Artículos para el hogar</td>
                                            <td>45</td>
                                            <td><span class="badge bg-warning">Inactivo</span></td>
                                            <td>
                                                <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-pencil"></i></button>
                                                <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Estadísticas de Categorías</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>Electrónicos</span>
                                    <span>63%</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" style="width: 63%"></div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>Ropa</span>
                                    <span>36%</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-success" style="width: 36%"></div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>Hogar</span>
                                    <span>18%</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-warning" style="width: 18%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  `,
  styleUrl: './admin-category.component.css'
})
export class CategoryComponent {

}
