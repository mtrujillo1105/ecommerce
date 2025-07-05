import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  template: `
      <!-- Dashboard Section -->
      <div id="dashboard" class="page-section active">
          <div class="row mb-4">
              <div class="col-md-3 mb-3">
                  <div class="card stat-card">
                      <div class="card-body text-center">
                          <i class="bi bi-box-seam fs-1"></i>
                          <h3 class="mt-2">245</h3>
                          <p class="mb-0">Productos</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-3 mb-3">
                  <div class="card stat-card">
                      <div class="card-body text-center">
                          <i class="bi bi-tags fs-1"></i>
                          <h3 class="mt-2">12</h3>
                          <p class="mb-0">Categorías</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-3 mb-3">
                  <div class="card stat-card">
                      <div class="card-body text-center">
                          <i class="bi bi-receipt fs-1"></i>
                          <h3 class="mt-2">89</h3>
                          <p class="mb-0">Pedidos</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-3 mb-3">
                  <div class="card stat-card">
                      <div class="card-body text-center">
                          <i class="bi bi-people fs-1"></i>
                          <h3 class="mt-2">156</h3>
                          <p class="mb-0">Clientes</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="row">
              <div class="col-md-8">
                  <div class="card">
                      <div class="card-header">
                          <h5 class="mb-0">Pedidos Recientes</h5>
                      </div>
                      <div class="card-body">
                          <div class="table-responsive">
                              <table class="table table-hover">
                                  <thead>
                                      <tr>
                                          <th>#</th>
                                          <th>Cliente</th>
                                          <th>Total</th>
                                          <th>Estado</th>
                                          <th>Fecha</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>#001</td>
                                          <td>Juan Pérez</td>
                                          <td>$125.00</td>
                                          <td><span class="badge bg-success">Completado</span></td>
                                          <td>2024-01-15</td>
                                      </tr>
                                      <tr>
                                          <td>#002</td>
                                          <td>María García</td>
                                          <td>$89.50</td>
                                          <td><span class="badge bg-warning">Pendiente</span></td>
                                          <td>2024-01-14</td>
                                      </tr>
                                      <tr>
                                          <td>#003</td>
                                          <td>Carlos López</td>
                                          <td>$250.00</td>
                                          <td><span class="badge bg-info">Enviado</span></td>
                                          <td>2024-01-13</td>
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
                          <h5 class="mb-0">Productos Populares</h5>
                      </div>
                      <div class="card-body">
                          <div class="d-flex align-items-center mb-3">
                              <img src="https://via.placeholder.com/50" class="product-img me-3" alt="Producto">
                              <div>
                                  <h6 class="mb-0">Smartphone Pro</h6>
                                  <small class="text-muted">45 ventas</small>
                              </div>
                          </div>
                          <div class="d-flex align-items-center mb-3">
                              <img src="https://via.placeholder.com/50" class="product-img me-3" alt="Producto">
                              <div>
                                  <h6 class="mb-0">Laptop Gaming</h6>
                                  <small class="text-muted">32 ventas</small>
                              </div>
                          </div>
                          <div class="d-flex align-items-center">
                              <img src="https://via.placeholder.com/50" class="product-img me-3" alt="Producto">
                              <div>
                                  <h6 class="mb-0">Auriculares BT</h6>
                                  <small class="text-muted">28 ventas</small>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>  
  `,
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
