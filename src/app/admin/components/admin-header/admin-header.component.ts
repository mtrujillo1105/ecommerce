import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="mb-0">Panel de Administración</h2>
            <div class="d-flex align-items-center">
                <div class="dropdown">
                    <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        <i class="bi bi-person-circle"></i> Admin
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#"><i class="bi bi-person"></i> Perfil</a></li>
                        <li><a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right"></i> Cerrar Sesión</a></li>
                    </ul>
                </div>
            </div>
        </div>  
  `,
  styleUrl: './admin-header.component.css'
})
export class HeaderComponent {

}
