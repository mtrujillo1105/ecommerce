declare var bootstrap: any;
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { showAlert } from '../../utils/functions';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  template: `
      <div class="modal fade" id="loginModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Iniciar Sesión</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form (ngSubmit)="handleLogin()" #formulario="ngForm">
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" name="correo" [(ngModel)]="correo" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Contraseña</label>
                            <input type="password" name="clave" [(ngModel)]="clave" class="form-control" required>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Ingresar</button>
                    </form>
                    <hr>
                    <p class="text-center">¿No tienes cuenta? <a href="#" onclick="showRegister()">Regístrate</a></p>
                </div>
            </div>
        </div>
    </div>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
    private authService = inject(AuthService);

    correo = '';
    clave = '';
    
    handleLogin() {
        this.authService.login({nombre: this.correo.split('@')[0], correo: this.correo});

        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        showAlert('Sesión iniciada correctamente', 'success');

    }
}
