import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Login Screen -->
    <div id="loginScreen" class="login-container">
        <div class="login-card">
            <div class="login-header">
                <i class="bi bi-shop display-4 text-primary mb-3"></i>
                <h2>Panel de Administración</h2>
                <p>Ingresa tus credenciales para continuar</p>
            </div>
            
            <form id="loginForm" (submit)="login();$event.preventDefault()">
                <div class="form-floating mb-3">
                    <input 
                        type="text" 
                        class="form-control" 
                        [(ngModel)] = "usuario"
                        name="usuario" 
                        placeholder="Usuario" required>
                    <label for="usuario"><i class="bi bi-person me-2"></i>Usuario</label>
                </div>
                
                <div class="form-floating mb-3 input-group-password">
                    <input 
                        type="password" 
                        class="form-control" 
                        [(ngModel)] = "password"                        
                        name="password" 
                        placeholder="Contraseña" required>
                    <label for="password"><i class="bi bi-lock me-2"></i>Contraseña</label>
                    <button type="button" class="password-toggle" onclick="togglePassword()">
                        <i class="bi bi-eye" id="passwordToggleIcon"></i>
                    </button>
                </div>
                
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="rememberMe">
                    <label class="form-check-label" for="rememberMe">
                        Recordarme
                    </label>
                </div>
                
                <button type="submit" class="btn btn-primary btn-login">
                    <i class="bi bi-box-arrow-in-right me-2"></i>Iniciar Sesión
                </button>
            </form>
            
            <div class="login-footer">
                <small class="text-muted">
                    <i class="bi bi-shield-check me-1"></i>
                    Conexión segura y protegida
                </small>
                <br>
                <small class="text-muted mt-2 d-block">
                    <strong>Demo:</strong> admin / admin123
                </small>
            </div>
        </div>
    </div>

  `,
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';

  private router = inject(Router);

  login() {
    if (this.usuario === 'admin' && this.password === 'admin123') {
      this.router.navigate(['/admin/home']);
    }
    else {
      this.error = 'Correo o contraseña incorrecta'
    }
  }
}
