import { Routes } from '@angular/router';

import { PrincipalComponent } from './public/principal.component';
import { AdminPrincipalComponent } from './admin/admin-principal.component';
import { AdminLoginComponent } from './admin/views/admin-login/admin-login.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'admin/home', component: AdminPrincipalComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: '**', redirectTo: '' } // Ruta por defecto si no existe  
];
