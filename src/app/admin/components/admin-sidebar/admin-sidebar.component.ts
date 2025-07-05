import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  imports: [],
  template: `
      <!-- Sidebar -->
      <div class="sidebar p-3">
          <div class="text-center mb-4">
              <h4 class="text-white"><i class="bi bi-shop"></i> Admin Panel</h4>
          </div>
          <nav class="nav flex-column">
              <a class="nav-link active" href="#" (click)="showSection($event, 'dashboard')">
                  <i class="bi bi-speedometer2"></i> Dashboard
              </a>
              <a class="nav-link" href="#" (click)="showSection($event, 'products')">
                  <i class="bi bi-box-seam"></i> Productos
              </a>
              <a class="nav-link" href="#" (click)="showSection($event, 'categories')">
                  <i class="bi bi-tags"></i> Categorías
              </a>
              <a class="nav-link" href="#" (click)="showSection($event, 'orders')">
                  <i class="bi bi-receipt"></i> Pedidos
              </a>
              <a class="nav-link" href="#" (click)="showSection($event, 'customers')">
                  <i class="bi bi-people"></i> Clientes
              </a>
              <a class="nav-link" href="#" (click)="showSection($event, 'settings')">
                  <i class="bi bi-gear"></i> Configuración
              </a>
          </nav>
      </div>
  `,
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
    @Input() opcion: string = '';
    @Output() notificarAlPadre = new EventEmitter<string>();

    showSection(event: Event, valor: string) {
        event.preventDefault();
        this.notificarAlPadre.emit(valor);
    }
}
