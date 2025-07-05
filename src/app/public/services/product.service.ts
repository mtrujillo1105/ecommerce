import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private apiUrl = "http://localhost:8000/api/products";

  async getAll() {
    const response = await axios.get(this.apiUrl);
    return response.data;
  }
}
