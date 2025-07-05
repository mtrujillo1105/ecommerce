import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  private base = "http://localhost:8000/api/admin/products";

  constructor() {}

  tokenAccess() {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzQ4NTQ2OTcyLCJleHAiOjE3NDg1NTA1NzIsIm5iZiI6MTc0ODU0Njk3MiwianRpIjoiT2daREpvT25lNGR6bW04USIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Afh7T0GD4MjAeD0-7N7PB9dmugQ_vE36zQPJK3sp0nI";
    return {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };      
  }

  async getAll() {
    try {   
      const response = await axios.get(this.base, this.tokenAccess());
      return response.data;
    }
    catch (error) {
      console.error("Error al obtener el producto: ", error);
      throw error;
    }
  }

  async getById(id: number) {
    try {
      const response = await axios.get(`${this.base}/${id}`, this.tokenAccess());
      return response.data;
    }
    catch(error) {
      console.error(`Error al obtener producto con ID ${id}`, error);
      throw error;
    }
  }

  async create(product: any) {
    try {
      const response = await axios.post(this.base, product, this.tokenAccess());
      return response.data;
    }
    catch(error) {
      console.error('Error al crear producto:', error);
      throw error;
    }
  }

  async update(id:number, product: any) {
    try {
      const response = await axios.put(`${this.base}/${id}`, product, this.tokenAccess());
    }
    catch(error) {
      console.error(`Error al actualizar el producto con ID ${id}:`, error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const response = await axios.delete(`${this.base}/${id}`, this.tokenAccess());
      return response.data;
    }
    catch(error) {
      console.error(`Error al eliminar producto con ID ${id}:`, error);
      throw error;
    }
  }
}
