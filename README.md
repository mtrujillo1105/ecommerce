# Ecommerce Angular

```
Este proyecto es una aplicación de comercio electrónico desarrollada en Angular 19. Incluye:

- Panel de administración para gestión de productos, categorías y órdenes.
- Vista pública para clientes con navegación de productos, carrito de compras y checkout.

```

## Tecnologías

```
- Angular 19
- Bootstrap 5
- RxJS
- Angular Router
- Formularios Reactivos
- API REST (conectado a backend Laravel.)

```

## Estructura del Proyecto

```
src/
├── app/
│ ├── admin/ # Módulo del administrador
│ │ ├── components/ # Componentes del admin
│ │ └── views/ # Páginas como dashboard, productos, etc.
│ ├── public/ # Módulo público (tienda)
│ │ ├── components/ # Componentes públicos
│ │ └── views/ # Página de inicio, productos, carrito, etc.
│ └── app.routes.ts
```